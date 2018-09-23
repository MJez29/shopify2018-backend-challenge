const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = express.Router();

// Logging framework
router.use(morgan('dev'));

// Parse application/json
router.use(bodyParser.json());

// Hello world
router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.use('/shops', require('./shops'));

router.use('*', (req, res) => {
  res.status(404).json({ error: 'Path not found' });
});

// Default error-handler
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occured' });
})

module.exports = router;
