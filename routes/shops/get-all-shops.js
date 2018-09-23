const { Shop } = require('../../models');

/**
 * Responds with the list of shops
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  res.json(await Shop.findAll());
}