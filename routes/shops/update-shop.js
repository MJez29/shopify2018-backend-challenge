const { Shop } = require('../../models');

/**
 * Updates the requested shop
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  if (req.body.name && typeof req.body.name === 'string') {
    req.shop.name = req.body.name;
    res.json(await req.shop.save());
  } else {
    res.status(400).json({ error: 'Invalid or missing fields' });
  }
};
