const {sequelize, Product, Home, Producer, HomeProducts, Users}  = require('../db');

const resolvers = {
  Query: {
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
    createProducer : async (parent,arg) => {
      return await Producer.create(arg)
    },
    createHome : async (parent,args) => {
      return await Home.create(args)
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
    updateProducer : async (parend,arg) => {
      let data = {}
      let eligiblePropeties = ['name', 'vat_number', 'site','image'];

      data = Object.fromEntries(
       Object.entries(args).filter(([key,value]) => value !== undefined && eligiblePropeties.includes(key))
      );

     let {affectedRows,_ } = await Producer.update(data,{where: {id: args.id}})
     return affectedRows != 0 ? await Producer.findOne({where: {id: args.id}}) : null
    },
    updateHome : async (parent, arg) => {
      let data = {}
      let eligiblePropeties = ['name', 'vat_number', 'site','image'];

      data = Object.fromEntries(
       Object.entries(args).filter(([key,value]) => value !== undefined && eligiblePropeties.includes(key))
      );

     let {affectedRows,_ } = await Producer.update(data,{where: {id: args.id}})
     return affectedRows != 0 ? await Producer.findOne({where: {id: args.id}}) : null
    },
    deleteProduct : async (parent,arg) => {
      return await Product.destroy({where: { id : arg.id}})
    },
    deleteProducer : async (parent,arg) => {
      return await Producer.destroy({where: { id : arg.id}})
    },
    deleteHome : async (parent, arg) => {
      return await Home.destroy({where:{ id : arg.id}})
    },


    addHomeProducts : async (parent,arg) => {
      return await HomeProducts.create(arg)
    },
    updateHomeProducts : async (parent,arg) => {
        let data = {}
        let eligiblePropeties = ['HomeId', 'ProductId', 'expiration_date','quantity'];

        data = Object.fromEntries(
         Object.entries(args).filter(([key,value]) => value !== undefined && eligiblePropeties.includes(key))
        );

       let {affectedRows,_ } = await HomeProducts.update(data,{where: {id: args.id}})
       return affectedRows != 0 ? await HomeProducts.findOne({where: {id: args.id}}) : null
     },
    removeHomeProducts : async (parent, arg) => {
      return await HomeProducts.destroy({where:{ id : arg.id}})
    }
  }
};

module.exports = resolvers;
