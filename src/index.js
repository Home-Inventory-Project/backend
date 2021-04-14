
require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server');

const typeDefs   = require('./schema/schema.js');
const resolvers  = require('./resolvers/resolvers.js');

const {sequelize, Product, Home}  = require('./db');

async function databaseConnection() {

	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');

		await sequelize.sync();

		const product = await Product.create({ name: "Beans" });
		const home = await Home.create({ name: "My Home" });

	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

databaseConnection();

const server = new ApolloServer({ typeDefs ,resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
