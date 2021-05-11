const { gql } = require('apollo-server');

const typeDefs = gql`
type Product {
  id: ID!
  name: String
  category: String
  image: String
  barcode: String
  createdAt: String
  modifiedAt: String
  deletedAt: String
}

type Home {
  id: ID!
  name: String!
  address: String
  state: String
  timezone: String
  createdAt: String!
  modifiedAt: String
  deletedAt: String
}

type HomeProducts {
  id: ID!
  expiration_date: String
  quantity: Int!
  createdAt: String!
  modifiedAt: String
  deletedAt: String
}

type Producer {
  id: ID!
  name: String!
  vat_number: Int
  site: String
  image: String!
  products: [Product]
  createdAt: String!
  modifiedAt: String
  deletedAt: String
}

type User {
  id: ID!
  username: String
  email: String
  password: String
  birthdate: String
  sex: String!
  status: String
  homes: [Home]
  createdAt: String
  modifiedAt: String
  deletedAt: String
}

type Query {
  products: [Product]
  homes: [Home]
  homeProducts: [HomeProducts]
  producers: [Producer]
  users: [User]
}

type Mutation {
  userCreate(username: String): User
}

`; // expiration_date: String => è una data | birthdate: String! => è una data | sex: String! => è un char

module.exports = typeDefs;
