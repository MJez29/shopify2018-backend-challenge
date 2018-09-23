/**
 * Creates a new product and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  const { product, body } = req;
  if (
    (body.title && typeof body.title === 'string') &&
    (body.description ? typeof body.description === 'string' : true) &&
    (body.price && typeof body.price === 'number')
  ) {
    try {
      product.title = body.title;
      product.description = body.description;
      product.price = body.price;

      res.json(await product.save());
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing' });
  }
}