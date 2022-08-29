const { ApolloServer } = require('apollo-server');
const userSchema = require('./user/schema/user.graphql');
const userResolvers = require('./user/resolvers/useResolvers');
const UsersAPI = require('./user/datasource/user');

const typeDefs = [userSchema];
const resolvers = [userResolvers];


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI() // Instanciando endpoints com o datasources, faz a logica para conectar com endpoints
    }
  }
});

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`);
});