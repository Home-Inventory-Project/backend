
require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

module.exports = sequelize;
