const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

const port = process.NODE_ENV.port || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});