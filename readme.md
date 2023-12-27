# To Install
npm install apollo-server apollo-server-express graphql

# To run the apollo-server
tsc server.ts && node server.js

# Note
Your server will typically be running at http://localhost:4000 unless you specified a different port.

# Some Example Queries Below

# Query to get a product by ID
query GetProduct {
  getProduct(id: "1") {
    id
    name
    price
  }
}

# Query to get an order by ID
query GetOrder {
  getOrder(id: "1") {
    id
    products {
      id
      name
      price
    }
    total
  }
}

# Mutation to create a new product
mutation CreateProduct {
  createProduct(name: "New Product", price: 29.99) {
    id
    name
    price
  }
}

# Mutation to create a new order with existing product IDs
mutation CreateOrder {
  createOrder(products: ["1", "2"]) {
    id
    products {
      id
      name
      price
    }
    total
  }
}

# Enjoy :)
