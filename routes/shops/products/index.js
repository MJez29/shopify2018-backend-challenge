const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.json({});
});

router.put('/:productId', (req, res) => {
  res.json({});
});

router.delete('/:productId', (req, res) => {
  res.json(null);
});

module.exports = router;
