const express = require('express');

const router = express.Router();

router.use('/orders', require('./orders'));

router.use('/products', require('./products'));

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.json({});
});

router.put('/:shopId', (req, res) => {
  res.json({});
});

router.delete('/:shopId', (req, res) => {
  res.json(null);
});

module.exports = router;
