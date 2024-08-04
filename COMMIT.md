# FEATURE LIST DEPARTMENTS

Fetch departments from the database using the @prisma/client.

## TODO

- [x] Create the GET route to fetch departments as `/departments`;
- [x] Register the GET route `/departments` in `routes/index.ts`;
- [x] Test the route ensuring the correct behaviour and response.

---

## Create the GET route to fetch departments as `/departments`

**src/routes/departments.ts**
```ts
import { app } from "@http/server";
import { prisma } from "@database/index";

export default () => {
    console.log("Departments route registered: /departments");
    app.get('/departments', async (request, reply) => {
        const departments = await prisma.department.findMany();
        return departments;
    })
}
```

## Register the GET route `/departments` in `routes/index.ts`

**src/routes/index.ts**
```ts
import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"
import employeesRouteRegister from "@routes/employees"
import departmentsRouteRegister from "@routes/departments"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
    employeesRouteRegister()
    departmentsRouteRegister()
}
```