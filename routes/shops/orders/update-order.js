/**
 * Updates an order and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  const { order, body } = req;
  if (body.title && typeof body.title === 'string') {
    try {
      order.title = body.title;

      res.json(await order.save());
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing' });
  }
}