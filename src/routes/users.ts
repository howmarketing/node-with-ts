import { app } from "@http/server";

export default () => {
    console.log("Users route registered: /users");
    app.get('/users', async (request, reply) => {
        return { hello: 'users' }
    })
}