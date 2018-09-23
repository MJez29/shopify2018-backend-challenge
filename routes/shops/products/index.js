const express = require('express');

const router = express.Router();

router.get('/', require('./get-all-products'));

router.post('/', require('./create-product'));

router.param('productId', require('./set-product'));

router.get('/:productId', require('./get-product'));

router.put('/:productId', require('./update-product'));

router.delete('/:productId', require('./delete-product'));

module.exports = router;
