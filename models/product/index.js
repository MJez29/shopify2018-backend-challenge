const Sequelize = require('sequelize');

/**
 * Function to create the Product model
 * @param { * } sequelize - The running sequelize instance
 */
module.exports = (sequelize) => {
  /**
   * The product model
   */
  const Product = sequelize.define('Product', {
    /**
     * The title of the product
     */
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    /**
     * The description of the product
     */
    description: {
      type: Sequelize.STRING(1023)
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
    },
    /**
     * The price of the product
     */
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0
      },
      get() {
        return parseFloat(this.getDataValue('price'));
      }
    }
  });

  return Product;
};
