/**
 * Creates a new product and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  const { shop, body } = req;
  if (body.title && typeof body.title === 'string') {
    try {
      const order = await shop.createOrder({
        title: body.title
      });

      res.json(order);
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing or invalid' });
  }
}