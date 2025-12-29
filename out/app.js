"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const app = (0, fastify_1.default)();
app.get('/', async (request, reply) => {
    return { hello: 'world' };
});
app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running on http://localhost:3333');
});
//# sourceMappingURL=app.js.map