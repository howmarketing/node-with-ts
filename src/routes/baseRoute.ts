import { app } from "@http/server";

export default () => {
    console.log("Base route registered: /");
    app.get('/', async (request, reply) => {
        return { hello: 'world' }
    })
}