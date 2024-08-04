# FEATURE ZOD

Use the Zod library to validate the request body and query parameters.

## TODO

- [x] Create the POST route of `/departments` to create a new department;
- [x] Install the Zod library;
- [x] Implement the validation of the request body;

---

## Create the POST route of `/departments` to create a new department

**src/routes/departments.ts**
```ts
import { app } from "@http/server";
import { prisma } from "@database/index";

export default () => {
    console.log("Departments GET, POST route registered: /departments");
    app.get('/departments', async (request, reply) => {
        const departments = await prisma.department.findMany();
        return departments;
    })
    app.post('/departments', async (request, reply) => {
        const payload = request.body;
        return { payload };
    })
}
```

## Install the Zod library

```bash
npm i zod
```

## Implement the validation of the request body

**src/routes/departments.ts**
```ts
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
            return {
                status: 'error',
                message: `Department with key ${data.key} already exists.`,
                meta: {moduleName: "Department", target: ["key"]},
                statusCode: 400,
                department: departmentExists
            }
        }

        // Create department
        try {
            const department = await prisma.department.create({ data })
            return {
                status: 'success',
                message: `Department ${data.label} created successfully.`,
                meta: {},
                statusCode: 201,
                department
            }
        } catch (e: any) {
            let message = e?.message || 'Something went wrong. Could not create the department.';
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                message = `Something went wrong. Could not create the department`;
            }
            return {
                status: 'error',
                message,
                meta: e?.meta || {},
                statusCode: 500,
                department: { id: 0, key: "", label: "", createdAt: new Date(), updatedAt: new Date() }
            }
        }
    })
}
```