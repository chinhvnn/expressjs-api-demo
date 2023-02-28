const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const apiV1Router = require('./routes/apiV1Router');


const app = express();

app.use(bodyParser.json())

apiV1Router(app);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
