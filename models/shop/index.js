const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  /**
   * The shop model
   */
  const Shop = sequelize.define('Shop', {
    /**
     * The name of the shop
     */
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    /**
     * The Unique Universal ID of the shop (also the primary key)
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
   * Creates relationships between the Shop model and others
   * @param { * } models - The model instances 
   */
  Shop.associate = ({ Product, Order }) => {
    Shop.hasMany(Product);
    Shop.hasMany(Order);
  };

  return Shop;
}