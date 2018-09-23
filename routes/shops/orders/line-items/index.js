const express = require('express');

const router = express.Router();

router.get('/', require('./get-all-line-items'));

router.post('/', require('./create-line-item'));

router.param('lineItemId', require('./set-line-item'));

router.get('/:lineItemId', require('./get-line-item'));

router.put('/:lineItemId', require('./update-line-item'));

router.delete('/:lineItemId', (req, res) => {
  res.json(null);
});

module.exports = router;
