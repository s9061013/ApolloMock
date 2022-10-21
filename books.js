const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    allCats: [Cat!]!
    allHorses: [Horse!]!
    book1s(aaa:String): [Book1]
  }

  type Cat {
    id: ID!
    name: String!
    age: Int!
    nice: Boolean
    user_id: String
  }
  type Horse {
    id: ID!
    name: String!
    netWorth: Float!
    description: String
  }

  type Book1 {
    title: String
    author: String
  }
`;
const mocks = {
  Int: () => 6,
  String: () => 'mocksssssss',
};
const book1s = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        book1s() {
            return book1s;
        },
    },
};
const server = new ApolloServer({
  typeDefs,
//   mocks,
  resolvers,
  playground: true,
  introspection: true,
});
server.listen().then(({ url }) => console.log(`Server running on ${url}`));




