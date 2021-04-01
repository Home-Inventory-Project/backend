const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: ID!
  name: String!
  category: String
  image: String
  barcode: String!
  createdAt: String!
  modifiedAt: String
  deletedAt: String
}

type Query {
  products: [Product]
}

`;

module.exports = typeDefs;
