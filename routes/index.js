const express = require('express');
const morgan = require('morgan');

const router = express.Router();

// Logging framework
router.use(morgan('dev'));

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.use('/shops', require('./shops'));

module.exports = router;
