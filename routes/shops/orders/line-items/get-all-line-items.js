/**
 * Responds with the list of line items
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  res.json(await req.order.getLineItems());
}