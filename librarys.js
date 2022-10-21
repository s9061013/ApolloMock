const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    libraries: [Library]
  }

  type Library {
    branch: String!
    books: [Book!]
  }
  type Book {
    title: String!
    author: Author!
  }
  type Author {
    name: String!
  }
`;
const mocks = {
  Int: () => 6,
  String: () => 'mocksssssss',
};

const libraries = [
    {
      branch: 'downtown'
    },
    {
      branch: 'riverside'
    },
];
  
// The branch field of a book indicates which library has it in stock
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
      branch: 'riverside'
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
      branch: 'downtown'
    },
];
const resolvers = {
    Query: {
        libraries() {

            // Return our hardcoded array of libraries
            return libraries;
        },
    },
    Library: {
        books(parent) {
    
          // Filter the hardcoded array of books to only include
          // books that are located at the correct branch
          return books.filter(book => book.branch === parent.branch);
        }
    },
    Book: {
    
        // The parent resolver (Library.books) returns an object with the
        // author's name in the "author" field. Return a JSON object containing
        // the name, because this field expects an object.
        author(parent) {
          return {
            name: parent.author
          };
        }
    },
};
const server = new ApolloServer({
  typeDefs,
//   mocks,
  resolvers,
});
server.listen().then(({ url }) => console.log(`Server running on ${url}`));