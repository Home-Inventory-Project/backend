const resolvers = {
  Query: {
    // Product example to see return value in apollo playground
    products: () => [
      {
        id: '4hjfdhfdjhu45h4jhfd',
        name: 'Product 1',
        barcode: '00000000',
        createdAt: Date.now()
      },
    ],
    homes: () => [
      {
      id: 'idddddddd',
      name: 'nomecasa',
      address: 'INDIRIZZO 1111'
      },
    ],
  },
/*   Mutation:{
    userCreate(username)
  } */
};

module.exports = resolvers;
