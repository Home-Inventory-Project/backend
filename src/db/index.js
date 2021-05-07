
require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});


const Product = require('./model/product.js')(sequelize)
const Home = require('./model/home.js')(sequelize)
const HomeProducts = require('./model/homeProducts.js')(sequelize)
const Producer = require('./model/producer.js')(sequelize)
const User = require('./model/user.js')(sequelize)

module.exports = {sequelize, Product, Home, HomeProducts, Producer, User};
