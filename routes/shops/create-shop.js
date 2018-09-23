const { Shop } = require('../../models');

/**
 * Creates a new shop and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  if (req.body.name) {
    try {
      const shop = await Shop.create({
        name: req.body.name
      });
      console.log(shop);
      res.json(shop);
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing' });
  }
}