/**
 * Attaches the requested product to the req object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) => {
  const { shop, params } = req;

  // Validate product id
  if (req.params.productId && typeof req.params.productId === 'string') {

    // Finds a list of products that match the where clause
    const productAsList = await shop.getProducts({
      where: { id: params.productId }
    });

    // If got a result
    if (Array.isArray(productAsList) && productAsList.length > 0) {
      req.product = productAsList[0];
      next();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } else {
    res.status(400).json({ error: 'Missing or invalid required fields' });
  }
}