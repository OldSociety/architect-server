const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");


const level = process.env.LOG_LEVEL || "info"

const nodeEnv = process.env.NODE_ENV || 'development'
const prettyPrint = nodeEnv === "development"


const logger = pinoHttp({
  genReqId: (request) => request.headers['x-request-id'] || nanoid(),
  level,
  prettyPrint
});

//In the above code, if the request has an X-Request-ID header, the value of that header will be used as the request ID. Otherwise, nanoid() is called to generate a new ID.

module.exports = logger;