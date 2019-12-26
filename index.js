const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/logging')()
//TODO: Config here
require('./startup/routes')(app);
//TODO: DB here

const port = process.env.PORT || 8080;
app.listen(port, () => winston.info(`Listening on ${port}`));
