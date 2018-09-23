/**
 * Attaches the requested line item to the req object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) => {
  const { order, params } = req;

  // Validate lineItem id
  if (req.params.lineItemId && typeof req.params.lineItemId === 'string') {

    // Finds a list of lineItems that match the where clause
    const lineItemAsList = await order.getLineItems({
      where: { id: params.lineItemId }
    });

    // If got a result
    if (Array.isArray(lineItemAsList) && lineItemAsList.length > 0) {
      req.lineItem = lineItemAsList[0];
      next();
    } else {
      res.status(404).json({ error: 'Line item not found' });
    }
  } else {
    res.status(400).json({ error: 'Missing or invalid required fields' });
  }
}