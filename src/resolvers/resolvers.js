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
    producers: async () => {
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
    updateProduct : async (parent,args) => {

       let data = {}
       let eligiblePropeties = ['name', 'category', 'barcode'];

       data = Object.fromEntries(
        Object.entries(args).filter(([key,value]) => value !== undefined && eligiblePropeties.includes(key))
       );

      let {affectedRows,_ } = await Product.update(data,{where: {id: args.id}})
      return affectedRows != 0 ? await Product.findOne({where: {id: args.id}}) : null

    },
    deleteProduct : async (parent,arg) => {
      return await Product.destroy({where: { id : arg.id}})
    }
  }
};

module.exports = resolvers;
