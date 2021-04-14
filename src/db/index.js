
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

module.exports = {sequelize, Product, Home};
