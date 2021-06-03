
require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});


const User = require('./model/user.js')(sequelize)
const Producer = require('./model/producer.js')(sequelize)
const Product = require('./model/product.js')(sequelize)
const Home = require('./model/home.js')(sequelize)
const HomeProducts = require('./model/homeProducts.js')(sequelize)

Product.belongsTo(Producer);
Home.belongsTo(User);
HomeProducts.belongsTo(Home);
HomeProducts.belongsTo(Product);

module.exports = {sequelize, User, Producer, Product, Home, HomeProducts};
