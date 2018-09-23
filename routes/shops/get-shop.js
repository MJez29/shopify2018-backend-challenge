const { Shop } = require('../../models');

/**
 * Responds with the requested shop
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  res.json(req.shop);
}