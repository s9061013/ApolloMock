// const { ApolloServer, gql } = require('apollo-server');
// const typeDefs = gql`
//   type Query {
//     allCats: [Cat!]!
//     allHorses: [Horse!]!
//     book1s(aaa:String): [Book1]
//     libraries: [Library]
//     userWalletRead(id:String): [UserWallet]
//   }

//   type User {
//     id: String!
//     user_id: String!
//     user_name: String!
//     accept_eula_date: String!
//     status: String!
//   }
//   type UserWallet{
//     id: String!
//     user: [User]
//     currency: [Currency]
//     balance: String!
//     create_dte: String!
//     update_dte: String!
//     status: String!
//   }
//   type Transaction{
//     id: String!
//     user_id: [User]
//     type: String!
//     currency: String!
//     create_dt: String!
//     trade: String!
//     order_id: String!
//     desc: String!
//     exchange: [Exchange]
//     status    : String!
//   }
//   type Exchange{
//     id: String!
//     exchange_dte: String!
//     currency: [Currency]
//     exchange_currency: [Currency]
//     buying_rate: String!
//     selling_rate: String!
//     desc: String!
//     status    : String!
//   }
//   type Currency{
//     id: String!
//     currency: String!
//     desc: String!
//     status    : String!
//   }
//   type SystemCode{
//     type: String!
//     code: String!
//     codename: String!
//     desc: String!
//     order: String!
//     status    : String!
//   }

//   type Cat {
//     id: ID!
//     name: String!
//     age: Int!
//     nice: Boolean
//     user_id: String
//   }
//   type Horse {
//     id: ID!
//     name: String!
//     netWorth: Float!
//     description: String
//   }

//   type Book1 {
//     title: String
//     author: String
//   }

//   type Library {
//     branch: String!
//     books: [Book!]
//   }
//   type Book {
//     title: String!
//     author: Author!
//   }
//   type Author {
//     name: String!
//   }
// `;
// const mocks = {
//   Int: () => 6,
//   String: () => 'mocksssssss',
// };
// const book1s = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
// ];
// const libraries = [
//     {
//       branch: 'downtown'
//     },
//     {
//       branch: 'riverside'
//     },
// ];
  
// // The branch field of a book indicates which library has it in stock
// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//       branch: 'riverside'
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//       branch: 'downtown'
//     },
// ];
// const user = {
//     id:"1111",
//     user_id:"test_user_id",
//     user_name:"test_user_name",
//     accept_eula_date:"2021-06-01",
//     status:"1",
// };
// const currency = {
//     id:"5555",
//     currency:"test_currency",
//     desc:"test_currency_desc",
//     status:"1",
// };
// const userWallets = [
//     {
//         id:"2222",
//         user_id:"test_user_id",
//         currency:currency,
//         balance:"1000",
//         create_dte:"2021-06-02",
//         update_dte:"2021-06-02",
//         status:"1",
//     },
// ];
// const transaction = {
//     id:"3333",
//     user_id:"1111",
//     type:"test_type",
//     currency:"5555",
//     create_dt:"2021-06-03",
//     trade:"333",
//     order_id:"3-3-3-3",
//     desc:"test_transaction_desc",
//     exchange:"4444",
//     status:"1",
// };
// const exchange = {
//     id:"4444",
//     exchange_dte:"2021-06-04",
//     currency:"5555",
//     exchange_currency:"5555",
//     buying_rate:"1",
//     selling_rate:"1.5",
//     desc:"test_exchange_desc",
//     status:"1",
// };
// const systemcode = {
//     type:"test_type",
//     code:"test_currency",
//     codename:"test_codename",
//     desc:"test_systemcode_desc",
//     order:"test_order",
//     status:"1",
// };
// const resolvers = {
//     Query: {
//         book1s() {
//             return book1s;
//         },
//         libraries() {

//             // Return our hardcoded array of libraries
//             return libraries;
//         },
//         userWalletRead(){
//             return userWallets;
//         },
//         // transactionRead(){
//         //     return transaction;
//         // },
//         // exchangeCreate(){
//         //     return exchange;
//         // },
//         // exchangeRead(){
//         //     return exchange;
//         // },
//         // exchangeUpdate(){
//         //     return exchange;
//         // },
//         // currencyCreate(){
//         //     return currency;
//         // },
//         // currencyRead(){
//         //     return currency;
//         // },
//         // currencyUpdate(){
//         //     return currency;
//         // }
//     },
//     Library: {
//         books(parent) {
    
//           // Filter the hardcoded array of books to only include
//           // books that are located at the correct branch
//           return books.filter(book => book.branch === parent.branch);
//         }
//     },
//     Book: {
    
//         // The parent resolver (Library.books) returns an object with the
//         // author's name in the "author" field. Return a JSON object containing
//         // the name, because this field expects an object.
//         author(parent) {
//           return {
//             name: parent.author
//           };
//         }
//     },
//     userWallet:{
//         user(parent) {
//             return user.filter(user.user_id === parent.user_id)
//         }
//     }
// };
// const server = new ApolloServer({
//   typeDefs,
// //   mocks,
//   resolvers,
// //   user,
// //   userWallet,
// //   transaction,
// //   exchange,
// //   currency,
// //   systemcode
// });
// server.listen().then(({ url }) => console.log(`Server running on ${url}`));




