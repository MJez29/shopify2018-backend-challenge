const express = require('express');

const router = express.Router();

router.use('/line-items', require('./line-items'));

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.json({});
});

router.put('/:orderId', (req, res) => {
  res.json({});
});

router.delete('/:orderId', (req, res) => {
  res.json(null);
});

module.exports = router;
