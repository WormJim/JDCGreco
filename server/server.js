let express = require('express');
let app = express();
let api = require('api/api');

require('./middleware/appMiddleware')(app);

app.use('/api', api);

module.exports = app;
