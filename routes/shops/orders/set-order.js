/**
 * Attaches the requested order to the req object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) => {
  const { shop, params } = req;

  // Validate order id
  if (req.params.orderId && typeof req.params.orderId === 'string') {

    // Finds a list of orders that match the where clause
    const orderAsList = await shop.getOrders({
      where: { id: params.orderId }
    });

    // If got a result
    if (Array.isArray(orderAsList) && orderAsList.length > 0) {
      req.order = orderAsList[0];
      next();
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } else {
    res.status(400).json({ error: 'Missing or invalid required fields' });
  }
}