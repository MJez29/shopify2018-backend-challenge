const express = require('express');

const router = express.Router();

router.use('/line-items', require('./line-items'));

router.get('/', require('./get-all-orders'));

router.post('/', require('./create-order'));

router.param('orderId', require('./set-order'));

router.get('/:orderId', require('./get-order'));

router.put('/:orderId', require('./update-order'));

router.delete('/:orderId', require('./delete-order'));

module.exports = router;
