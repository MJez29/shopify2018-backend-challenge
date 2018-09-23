const { Shop } = require('../../models');

/**
 * Responds with null on successful delete
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  if (req.params.shopId) {
    const shop = await Shop.findById(req.params.shopId);
    if (shop) {
      await shop.destroy();
      res.json(null);
    } else {
      res.status(404).json({ error: 'Shop not found' });
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing' });
  }
}