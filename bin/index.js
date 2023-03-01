#!/usr/bin/env node
const fastify = require('fastify')({
    logger: {
        level: 'info',
    }
})

const cors = require('@fastify/cors');

const proxy = require('@fastify/reply-from');
const readline = require("readline");

fastify.register(cors, {origin: '*'});


fastify.get('*', (request, reply) => {
    reply.from(request.raw.url)
})

fastify.post('*', (request, reply) => {
    reply.from(request.raw.url, {body: request.body})
})


fastify.patch('*', (request, reply) => {
    reply.from(request.raw.url, {body: request.body})
})

fastify.put('*', (request, reply) => {
    reply.from(request.raw.url, {body: request.body})
})


fastify.delete('*', (request, reply) => {
    if (request.body) {
        reply.from(request.raw.url, {body: request.body})
    } else {
        reply.from(request.raw.url)
    }
})


function ask(question) {
    const readline = require('readline-sync');
    return readline.question(question)
}


/**
 * Run the server!
 */ function start() {
    const baseUrlAnswer = ask('Enter base Url for Target API: ')
    if (!baseUrlAnswer) {
        throw new Error('Please enter a valid base url')
    }
    const portAnswer = ask('Enter port for Target API: (Default: 3000)')
    try {
        let port = 3000
        if (portAnswer.length > 0) {
            port = portAnswer
        }
        if (baseUrlAnswer) {
            console.log(`Base Url is set to:, ${baseUrlAnswer}!`);
            fastify.register(proxy, {
                base: baseUrlAnswer,
            });
        }
        fastify.listen({port: port}).then(r =>
            fastify.log.info(`Server listening on ${fastify.server.address().port}`)
        );
    } catch (e) {
        fastify.log.error(e)
    }

}

start()
