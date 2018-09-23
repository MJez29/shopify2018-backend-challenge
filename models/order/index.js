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
   * Creates relationships between the Order model and others
   * @param { * } models - The model instances 
   */
  Order.associate = ({ LineItem }) => {
    Order.hasMany(LineItem, { foreignKey: 'orderId' });
  };

  return Order;
};
