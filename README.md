Create an readme.md content teaching users to use node.js with typescript following the below draft to create an better explained, detailed and semantic instructions.

DRAFT:

# HOW TO USE NODE.JS WITH TYPESCRIPT

This README.md file will teach you how to use Node.js with TypeScript.

## STARTING THE PROJECT

### 1. Create a new project folder and get into that

```bash

mkdir node-with-ts && cd node-with-ts

```

### 2. Initialize the project

```bash

npm init -y

```

### 3. Installing the typescript few dependencies

```bash

npm install --save-dev typescript @types/node

```

### 4. Create the tsconfig.json file

```bash

npx tsc --init

```

#### 4.1. Configure the tsconfig.json file

Follow the instructions present on the microsoft github account on the repository of typescript [GitHub: microsoft/TypeScript/wiki/Node-Target-Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

**Node 20 tsconfig example:**

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

### 5. Create the path structure of folders

```bash

mkdir -p src/http && mkdir -p src/database && mkdir -p src/routes && mkdir -p src/controllers && mkdir -p src/utils

touch src/index.ts && touch src/http/server.ts && touch src/database/index.ts && touch src/routes/users.ts && touch src/controllers/users.ts && touch src/utils/app-error.ts

```

### 5. Install and configure the TypeScript Execute

```bash

npm i tsx -D

```

#### 5.1. Configure the TypeScript Executer

**package.json:**

```json

{
  "name": "with-ts",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "dev": "tsx watch index.ts --env-file .env.local"
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

### 6. Create the .env.local file

```bash

touch .env.local

```

```shell

DB_HOST=localhost
DB_USER=node-with-ts
DB_PASSWORD=node-with-ts
DB_NAME=node-with-ts

```
