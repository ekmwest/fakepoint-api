'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.json'), { foreignKeySuffix: "_id" });
const helmet = require('helmet');
const corsCache = require('./corsCache.js');
const middlewares = jsonServer.defaults();
const authenticate = require('./authenticate.js');
const timestamp = require('./timestamp.js');

process.env.PORT = process.env.PORT || '3001';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.API_KEYS = process.env.API_KEYS || 'dXNlcm5hbWU6cGFzc3dvcmQ= ZGV2OnBhc3M=';

server.use(helmet());
server.use(corsCache);
server.use(middlewares);
server.use(authenticate);
server.use(jsonServer.bodyParser);
server.use(timestamp);
server.use(router);

server.listen(parseInt(process.env.PORT), () => { console.log(`Listening on port ${process.env.PORT}`)});
