/**
 * Creates a new line item and responds with it
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res, next) => {
  const { order, body } = req;
  if (
    (body.productId && typeof body.productId === 'string') &&
    (body.quantity ? (typeof body.quantity === 'number' && Number.isInteger(body.quantity) && body.quantity > 0) : true)
  ) {
    try {
      const lineItem = await order.createLineItem({
        productId: body.productId,
        quantity: body.quantity
      });

      res.json(await lineItem.toAsyncJSON());
    } catch (e) {
      next(e);
    }
  } else {
    res.status(400).json({ error: 'Required parameters missing or invalid' });
  }
}