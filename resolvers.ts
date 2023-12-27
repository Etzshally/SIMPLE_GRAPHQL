import { Product, Order } from './schema';

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 10.99 },
  { id: '2', name: 'Product 2', price: 19.99 },
];

const orders: Order[] = [];

const resolvers = {
  Query: {
    getProduct: (parent: any, { id }: { id: string }): Product | undefined =>
      products.find((product) => product.id === id),
    getOrder: (parent: any, { id }: { id: string }): Order | undefined =>
      orders.find((order) => order.id === id),
  },
  Mutation: {
    createProduct: (
      parent: any,
      { name, price }: { name: string; price: number }
    ): Product => {
      const product: Product = { id: String(products.length + 1), name, price };
      products.push(product);
      return product;
    },
    createOrder: (
      parent: any,
      { products: productIds }: { products: string[] }
    ): Order => {
      const orderProducts: Product[] = products.filter((product) =>
        productIds.includes(product.id)
      );
      const total: number = orderProducts.reduce(
        (sum, product) => sum + product.price,
        0
      );
      const order: Order = {
        id: String(orders.length + 1),
        products: orderProducts,
        total,
      };
      orders.push(order);
      return order;
    },
  },
};

export default resolvers;
