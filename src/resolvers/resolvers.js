const {sequelize, Product, Home, Producer, Users}  = require('../db');

const resolvers = {
  Query: {
    // Product example to see return value in apollo playground
    products: async () => {
      return await Product.findAll();
    },
    homes: async () => {
      return await Home.findAll();
    },
    producers: async () => {1
      return await Producer.findAll();
    },
    users: async () => {
      return await Users.findAll();
    },
  },
  Mutation: {
    createProduct : async (parent,arg) => {
      return await Product.create(arg)
    },
    updateProduct : async (parent,arg) => {
      if (arg.name     != undefined ||
          arg.category != undefined ||
          arg.barcode  != undefined ) {
       console.log(arg);
       return  await Product.findAll({  where: {
            id: arg.id
          }}
        )

      }
      throw new Error('Missing parameters')
    },
    createProduct : async (parent,arg) => {
      return await Product.create(arg)
    }
  }
};

module.exports = resolvers;
