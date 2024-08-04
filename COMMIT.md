# FEATURE PRISMA

Implemented the Prisma ORM for database management.

## TODO

- [x] Install Prisma and its dependencies.
- [x] Initialize Prisma schema.
- [x] Create database models and migrations.
- [x] Configure Prisma client in the application.

---

## ABOUT PRISMA

**Prisma ORM** is a powerful tool for simplifying database interactions in Node.js and TypeScript applications. Here are some key points about Prisma:

1. **Readable Data Model**: Prisma provides an intuitive data model that allows you to define your database schema using a clear and concise syntax. This makes it easier to work with your data and understand the relationships between tables.

2. **Automated Migrations**: Prisma handles database migrations automatically. When you make changes to your data model, Prisma generates migration files that you can apply to your database. This ensures that your schema evolves seamlessly as your application grows.

3. **Type-Safety**: Prisma offers type-safe queries, which means you can write database queries using TypeScript or JavaScript without worrying about SQL syntax. The generated Prisma Client provides methods for querying, creating, updating, and deleting data, all with type-checking.

4. **Global Cache and Connection Pool**: Prisma Accelerate includes a global cache and a scalable connection pool. This enables lightning-fast queries and efficient handling of database connections as your application scales¹.

5. **Real-Time Functionality**: Prisma Pulse allows you to build reactive real-time applications with type-safe database subscriptions. You can easily react to changes in your database and trigger workflows based on events².

6. **Flexible Stack Integration**: Prisma works seamlessly with various databases and frameworks. You can bring your own database and change your stack as needed, while Prisma ensures everything continues to function smoothly¹.

## INSTALLING PRISMA

To install Prisma ORM, run the following command:

```bash
npm i prisma -D
```

## SETTING UP PRISMA

To set up Prisma, follow these steps:

**1. Initialize Prisma in your project:**

```bash
npx prisma init --datasource-provider SQLite
```

**2. Edit your vscode settings with the following:**
```json
{
    "[prisma]": {
        "editor.formatOnSave": true
    },
}
```

**3. Your .env should now look like this:**
```bash
DATABASE_URL="file:./dev.db"
DB_HOST=localhost
DB_USER=node-with-ts
DB_PASSWORD=node-with-ts
DB_NAME=node-with-ts
```

**4. Create your Prisma schema:**
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// npx prisma migrate dev

model Department {
  id                        Int                         @id @default(autoincrement())
  key                       String                      @unique
  label                     String
  Employee                  Employee[]
  EmployeeDepartmentHistory EmployeeDepartmentHistory[]
  createdAt                 DateTime                    @default(now())
  updatedAt                 DateTime                    @default(now()) @updatedAt

  // @@map("departments")
}

model Employee {
  id                        Int                         @id @default(autoincrement())
  publicId                  String                      @unique @default(uuid())
  firstName                 String
  lastName                  String
  hireDate                  DateTime?                   @default(now())
  isActive                  Boolean
  department                Department?                 @relation(fields: [departmentKey], references: [key])
  departmentKey             String?
  phone                     String
  address                   String
  EmployeeDepartmentHistory EmployeeDepartmentHistory[]
  createdAt                 DateTime                    @default(now())
  updatedAt                 DateTime                    @default(now()) @updatedAt

  // @@map("employees")
}

model EmployeeDepartmentHistory {
  id              Int        @id @default(autoincrement())
  employee        Employee   @relation(fields: [employeeId], references: [id])
  employeeId      Int
  department      Department @relation(fields: [departmentKey], references: [key])
  departmentKey   String
  departmentLabel String     @default("")
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @default(now()) @updatedAt

  // @@map("employee_department_history")
}

```

**5. Run the migration:**
```bash
npx prisma migrate dev
```

**6. Open the Prisma Studio:**
```bash
npx prisma studio
```

> Feature prisma successfully installed and configured using the development database provided SQLite.
> 
