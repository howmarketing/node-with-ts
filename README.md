# HOW TO USE NODE.JS WITH TYPESCRIPT

This README.md file will guide you through setting up and using Node.js with TypeScript.

## STARTING THE PROJECT

### 1. Create a New Project Folder

First, create a new project folder and navigate into it:

```bash
mkdir node-with-ts && cd node-with-ts
```

### 2. Initialize the Project

Initialize a new Node.js project with a default `package.json` file:

```bash
npm init -y
```

### 3. Install TypeScript and Node.js Type Definitions

Install TypeScript and the necessary type definitions for Node.js as development dependencies:

```bash
npm install --save-dev typescript @types/node
```

### 4. Create and Configure the `tsconfig.json` File

#### 4.1. Initialize `tsconfig.json`

Create a `tsconfig.json` file with the default TypeScript configuration:

```bash
npx tsc --init
```

#### 4.2. Configure `tsconfig.json`

Configure your `tsconfig.json` file based on the Node.js version you are targeting. Below is an example configuration for Node.js 20:

```jsonc
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2022",                         /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["ES2023"],                          /* Specify a set of bundled library declaration files that describe the target runtime environment. */

    /* Modules */
    "module": "node16",                         /* Specify what module code is generated. */

    /* Interop Constraints */
    "esModuleInterop": true,                    /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,   /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                             /* Enable all strict type-checking options. */

    /* Completeness */
    "skipLibCheck": true                        /* Skip type checking all .d.ts files. */
  }
}
```

For more details on configuring `tsconfig.json`, refer to the [TypeScript Node Target Mapping guide](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

### 5. Create the Project Folder Structure

Create the necessary folders for your project:

```bash
mkdir -p src/{http,database,routes,controllers,utils}
touch src/index.ts src/http/server.ts src/database/index.ts src/routes/users.ts src/controllers/users.ts src/utils/app-error.ts
```

### 6. Install and Configure `tsx` for Running TypeScript

Install `tsx`, a utility to run TypeScript files directly:

```bash
npm install --save-dev tsx
```

#### 6.1. Update `package.json` Scripts

Update the `scripts` section in your `package.json` to use `tsx`:

```json
{
  "name": "node-with-ts",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "dev": "tsx watch src/index.ts --env-file .env.local"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^22.1.0",
    "tsx": "^4.16.5",
    "typescript": "^5.5.4"
  }
}
```

### 7. Create Environment Configuration File

Create a `.env.local` file to store your environment variables:

```bash
touch .env.local
```

Add your environment variables to the `.env.local` file:

```env
DB_HOST=localhost
DB_USER=node-with-ts
DB_PASSWORD=node-with-ts
DB_NAME=node-with-ts
```

By following these steps, you will have a basic Node.js project set up with TypeScript, ready for development.