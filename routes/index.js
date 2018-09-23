const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = express.Router();

// Logging framework
router.use(morgan('dev'));

// Parse application/json
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.use('/shops', require('./shops'));

module.exports = router;
