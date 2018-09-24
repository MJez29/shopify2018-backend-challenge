/**
 * Responds with the list of orders
 * @param { * } req - The express request object 
 * @param { * } res - The express response object
 */
module.exports = async (req, res) => {
  const orders = await req.shop.getOrders();
  const jsonOrders = orders.map(async (order) => await order.toAsyncJSON());
  res.json(jsonOrders);
}