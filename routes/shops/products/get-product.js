/**
 * Responds with the requested product
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  res.json(req.product);
}