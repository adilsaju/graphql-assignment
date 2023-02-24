import {
  ApolloServerPluginDrainHttpServer
} from "apollo-server-core";
import {
  ApolloServer
} from "apollo-server-express";
import http from "http";
import express from "express";
import {
  typeDefs,
  resolvers
} from "./src/schema";

// // Define your GraphQL schema
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Define your resolvers
// const resolvers = {
//   Query: {
//     hello: () => "Hello World"
//   }
// };

const startApolloServer = async (typeDefs, resolvers) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({
      httpServer
    })],
  });


  await server.start();

  server.applyMiddleware({
    app
  });
  await new Promise((resolve) => httpServer.listen({
    port: 4000
  }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers);