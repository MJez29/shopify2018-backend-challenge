const { Shop } = require('../../models');

/**
 * Attaches the requested shop to the req object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) => {
  if (req.params.shopId && typeof req.params.shopId === 'string') {
    const shop = await Shop.findById(req.params.shopId);
    if (shop) {
      req.shop = shop;
      next();
    } else {
      res.status(404).json({ error: 'Shop not found' });
    }
  } else {
    res.status(400).json({ error: 'Missing required fields' });
  }
}