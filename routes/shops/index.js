const express = require('express');

const router = express.Router();

router.get('/', require('./get-all-shops'));

router.post('/', require('./create-shop'));

router.param('shopId', require('./set-shop'));

router.use('/:shopId/orders', require('./orders'));

router.use('/:shopId/products', require('./products'));

router.get('/:shopId', require('./get-shop'));

router.put('/:shopId', require('./update-shop'));

router.delete('/:shopId', require('./delete-shop'));

module.exports = router;
