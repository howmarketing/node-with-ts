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