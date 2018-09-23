const Sequelize = require('sequelize');

/**
 * Function to create the LineItem model
 * @param { * } sequelize - The running sequelize instance
 */
module.exports = (sequelize) => {
  /**
   * The product model
   */
  const LineItem = sequelize.define('LineItem', {
    
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

  return LineItem;
};
