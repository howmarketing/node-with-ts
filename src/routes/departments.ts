import { app } from "@http/server";
import { prisma } from "@database/index";
import { z } from "zod";
import { Prisma } from "@prisma/client";

export default () => {
    console.log("Departments GET, POST route registered: /departments");

    // GET /departments
    app.get('/departments', async (request, reply) => {
        const departments = await prisma.department.findMany();
        return departments;
    })

    // POST /departments
    app.post('/departments', async (request, reply) => {

        // Validate input
        const schema = z.object({
            key: z.string().min(2),
            label: z.string().max(64),
        })

        // Parse request body
        const payload = request.body;
        const data = schema.parse(payload);
        
        // Check if department already exists
        const departmentExists = await prisma.department.findUnique({ where: { key: data.key } });
        if(departmentExists) {
            return reply.status(400).send({
                status: 'error',
                message: `Department with key ${data.key} already exists.`,
                meta: {moduleName: "Department", target: ["key"]},
                statusCode: 400,
                department: departmentExists
            })
        }

        // Create department
        try {
            const department = await prisma.department.create({ data })
            return reply.status(201).send({
                status: 'success',
                message: `Department ${data.label} created successfully.`,
                meta: {},
                statusCode: 201,
                department
            })
        } catch (e: any) {
            let message = e?.message || 'Something went wrong. Could not create the department.';
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                message = `Something went wrong. Could not create the department`;
            }
            return reply.status(500).send({
                status: 'error',
                message,
                meta: e?.meta || {},
                statusCode: 500,
                department: { id: 0, key: "", label: "", createdAt: new Date(), updatedAt: new Date() }
            })
        }
    })
}