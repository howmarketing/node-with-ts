import { app } from "@http/server";
import { prisma } from "@database/index";

export default () => {
    console.log("Employees route registered: /employees");
    app.get('/employees', async (request, reply) => {
        const employees = await prisma.employee.findMany({
            include: {
                department: true,
                EmployeeDepartmentHistory: true
            }
        });
        return employees;
        return { hello: 'employees' }
    })
}