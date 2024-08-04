# FEATURE LIST EMPLOYEES

Fetch employees from the database using the @prisma/client.

## TODO

- [x] Provide the prisma database provider on `database/index.ts`;
- [x] Create the GET route to fetch employees as `/employees`;
- [x] Register the GET route `/employees` in `routes/index.ts`;
- [x] Test the route ensuring the correct behaviour and response.

---

## Prisma database provider

**src/database/index.ts**
```ts
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'],
});
```

## Create the GET route to fetch employees as `/employees`

**src/routes/employees.ts**
```ts
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
```

## Register the GET route `/employees` in `routes/index.ts`

**src/routes/index.ts**
```ts
import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"
import employeesRouteRegister from "@routes/employees"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
    employeesRouteRegister()
}
```