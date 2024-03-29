/**
 * Creates a new product and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  const { shop, body } = req;
  if (
    (body.title && typeof body.title === 'string') &&
    (body.description ? typeof body.description === 'string' : true) &&
    (body.price && typeof body.price === 'number')
  ) {
    try {
      const product = await shop.createProduct({
        title: body.title,
        description: body.description,
        price: body.price
      });

      res.json(product);
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing' });
  }
}