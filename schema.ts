import { gql } from 'apollo-server';

// Product type
export interface Product {
  id: string;
  name: string;
  price: number;
}

// Order type
export interface Order {
  id: string;
  products: Product[];
  total: number;
}

// GraphQL Schema
export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Order {
    id: ID!
    products: [Product]!
    total: Float!
  }

  type Query {
    getProduct(id: ID!): Product
    getOrder(id: ID!): Order
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product
    createOrder(products: [ID!]!): Order
  }
`;
