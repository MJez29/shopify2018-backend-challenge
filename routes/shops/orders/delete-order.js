/**
 * Responds with null on successful delete
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  await req.order.destroy();
  res.json(null);
}