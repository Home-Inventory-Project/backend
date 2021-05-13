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

       let data = {}

       if( arg.name != undefined )  data['name'] = arg.name
       if( arg.category != undefined )  data['category'] = arg.category
       if( arg.barcode != undefined )  data['barcode'] =  arg.barcode

       let p = await Product.update(data,{
        where: {id: arg.id},
        returning: true,
        plain: true})

      if (p[1] != 0) {
        return await Product.findOne({where: {id: arg.id}})
      }

      return null;
    },
    createProduct : async (parent,arg) => {
      return await Product.create(arg)
    }
  }
};

module.exports = resolvers;
