const Sequelize = require('sequelize');

/**
 * Function to create the Order model
 * @param { * } sequelize - The running sequelize instance
 */
module.exports = (sequelize) => {
  /**
   * The order model
   */
  const Order = sequelize.define('Order', {
    /**
     * The title of the order
     */
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    /**
     * The Unique Universal ID of the product (also the primary key)
     */
    id: {
      type: Sequelize.UUID,
      unique: true,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    }
  });

  /**
   * Gets the total cost of the order by summing the cost
   * of the individual line items
   */
  Order.prototype.getCost = async function() {
    const lineItems = await this.getLineItems();
    const indivCosts = lineItems.map(li => li.getCost());
    const totalCost = indivCosts.reduce(async (c, i) => {
      return c + await i;
    }, 0);

    return totalCost;
  }

  /**
   * Attaches the cost of the order to the JSON response
   */
  Order.prototype.toAsyncJSON = async function() {
    const cost = await this.getCost();
    const order = {
      ...this.toJSON(),
      cost
    };

    return order;
  }

  /**
   * Creates relationships between the Order model and others
   * @param { * } models - The model instances 
   */
  Order.associate = ({ LineItem }) => {
    Order.hasMany(LineItem, { foreignKey: 'orderId' });
  };

  return Order;
};
