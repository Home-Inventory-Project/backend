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
  },
};


module.exports = resolvers;
