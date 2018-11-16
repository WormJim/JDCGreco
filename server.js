const express = require('express');
const app = express();
// const api = require('api/api');

require('./server/middleware/appMiddleware')(app);

// app.use('/api', api);

app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
