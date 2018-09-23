const Sequelize = require('sequelize');

const sequelize = new Sequelize('Shopify2018BackendChallenge', 'root', 'Done.with_fr0nt&', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const LineItem = sequelize.import('./line-item/index.js');
const Order = sequelize.import('./order/index.js');
const Product = sequelize.import('./product/index.js');
const Shop = sequelize.import('./shop/index.js');

const db = {
  LineItem, Order, Product, Shop, sequelize
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
