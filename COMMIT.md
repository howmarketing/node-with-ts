# FEATURE FASTIFY

FASTIFY is an efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

## INSTALLING FASTIFY
To install Fastify, run the following command:

```bash
npm i fastify
```

## USING FASTIFY

To use Fastify with typescript, you can create a new Fastify instance and start listening for requests:

**src/http/server.ts**
```ts
import fastify from 'fastify';

export const app = fastify({
    logger: true
});

export const startServer = async () => {
    console.log("starting server...")

    try {
        await app.listen({ port: 3333, host: '0.0.0.0' }, function (err, address) {
            if (err) {
                app.log.error(err)
                process.exit(1)
            }
            app.log.info(`server listening on ${address}`)
            console.log(`server started and listening on ${address}`)
        });
        
    } catch (err) {
        console.log(err);
        app.log.error(err)
        process.exit(1)
    }
}
```

**src/index.ts**
```ts
import registerRoutes from "@routes/index"
import { startServer } from "@http/server"

registerRoutes()
startServer()
```

**src/routes/index.ts**
```ts
import baseRouteRegister from "@routes/baseRoute"
import usersRouteRegister from "@routes/users"

console.log("Registering routes...")
export default () => {
    baseRouteRegister()
    usersRouteRegister()
}
```

**src/routes/baseRoute.ts**
```ts
import { app } from "@http/server";

export default () => {
    console.log("Base route registered: /");
    app.get('/', async (request, reply) => {
        return { hello: 'world' }
    })
}
```

**src/routes/users.ts**
```ts
import { app } from "@http/server";

export default () => {
    console.log("Users route registered: /users");
    app.get('/users', async (request, reply) => {
        return { hello: 'users' }
    })
}
```