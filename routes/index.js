const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.use('/shops', require('./shops'));

module.exports = router;
