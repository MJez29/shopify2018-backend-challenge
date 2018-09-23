const express = require('express');

const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();

app.use(routes);

const port = process.env.port || 3000;

// Starts sequelize and then the server
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
