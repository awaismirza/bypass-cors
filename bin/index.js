#!/usr/bin/env node
const fastify = require('fastify')({
    logger: {
        level: 'info',
    }
})

const cors = require('@fastify/cors');

const proxy = require('@fastify/reply-from');
const readline = require("readline-sync");
const argv = require('process').argv;


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
    let portEnv;
    let baseEvn;
    let baseUrlAnswer;
    let basePortAnswer;
    argv.forEach((val, index) => {
        if (index === 2) {
            baseEvn = val;
        }
        if (index === 3) {
            portEnv = val;
        }
    });
    if (!baseEvn) {
        baseUrlAnswer = ask('Enter base Url for Target API: ')
        if (!baseUrlAnswer) {
            throw new Error('Please enter a valid base url')
        }
        baseEvn = baseUrlAnswer
    }

    if (!portEnv) {
        basePortAnswer = ask('Enter port for Target API: (Default: 3000)')
        if (basePortAnswer.length === 0) {
            basePortAnswer = 3000
        }
        portEnv = basePortAnswer
        console.log(`Base Url is set to:, ${basePortAnswer}`);
    }

    fastify.register(proxy, {
        base: baseEvn,
    });
    try {
        fastify.listen({port: portEnv}).then(r =>
            fastify.log.info(`Server listening on ${fastify.server.address().port}`)
        );
    } catch (e) {
        fastify.log.error(e)
    }
}

start()
