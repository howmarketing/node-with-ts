import { app } from "@http/server";
import { prisma } from "@database/index";

export default () => {
    console.log("Departments route registered: /departments");
    app.get('/departments', async (request, reply) => {
        const departments = await prisma.department.findMany();
        return departments;
    })
}