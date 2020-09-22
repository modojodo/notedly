const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 4000;
const typeDefs = gql`
type Query {
  hello: String
}
`;

const resolvers = {
  Query: {
    hello: () => `Hello World`,
  }
}
app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log('Listening on port 4000!'));