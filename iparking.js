const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    exchanges:[Exchange]
    userWallets(userId:String): [UserWalletRead]
    transactions(userId:String, type:String, createDtFrom:String, createDtTo:String, tradeFrom:String, tradeTo:String):[TransactionRead]
    currencys:[Currency]
  }
  type Mutation {
    addExchange(exchangeDte:String,currency:String,exchangeCurrency:String,buyingRate:String,sellingRate:String,desc:String,status:String): Exchange
    updateExchange(id:String,exchangeDte:String,currency:String,exchangeCurrency:String,buyingRate:String,sellingRate:String,desc:String,status:String): Exchange
    deleteExchange(id:String): String
    addCurrency(currency:CurrencyInput): Currency!
    updateCurrency(id:String, currency:[CurrencyInput]): Currency!
    deleteCurrency(id:String): String
  }
  input CurrencyInput {
    currency: String!
    desc:String!
    status:String
  }
  type ExchangeRead {
    id: String!
    exchangeDte: String!
    currencyId: String!
    currencyCurrency: String!
    exchangeCurrencyId: String!
    exchangeCurrencyCurrency: String!
    buyingRate: String!
    sellingRate: String!
    desc:String!
    status:String
  }
  type TransactionRead {
    id: String!
    userId: String!
    userName: String!
    type: String!
    currencyId: String!
    currencyCurrency: String!
    createDt: String!
    trade: String!
    desc: String!
    exchangeId: String!
    exchangeBuyingRate: String!
    exchangeSellingRate: String!
    status: String!
    txid: String!
  }
  type UserWalletRead {
    id: String!
    userId: String!
    userName: String!
    currencyId: String!
    currencyCurrency: String!
    balance: String!
    createDte: String!
    updateDte: String!
    status: String!
  }
  type User {
    id: String!
    userId: String!
    userName: String!
    acceptEulaDate: String!
    status: String!
  }
  type UserWallet{
    id: String!
    user: [User]
    currency: [Currency]
    balance: String!
    createDte: String!
    updateDte: String!
    status: String!
  }
  type Transaction{    
    id: String!
    user: [User]
    type: String!
    currency: [Currency]
    createDt: String!
    trade: String!
    orderId: String!
    desc: String!
    exchange: [Exchange]
    status    : String!
  }
  type Exchange{
    id: String!
    exchangeDte: String!
    currency: [Currency]
    exchangeCurrency: [Currency]
    buyingRate: String!
    sellingRate: String!
    desc: String!
    status    : String!
  }
  type Currency{
    id: String!
    currency: String!
    desc: String!
    status: String!
  }
  type SystemCode{
    type: String!
    code: String!
    codename: String!
    desc: String!
    order: String!
    status    : String!
  }
`;
const mocks = {
  Int: () => 6,
  String: () => 'mocksssssss',
};
const users = [
    {
        id:"1111",
        userId:"test_user_id",
        userIame:"test_user_name",
        acceptEulaDate:"2021-06-01",
        status:"1",
    }
];
const currencys = [
    {
        id:"5555",
        currency:"test_currency",
        desc:"test_currency_desc",
        status:"1",
    },
    {
        id:"55551",
        currency:"test_currency1",
        desc:"test_currency_desc1",
        status:"1",
    }
];
const userWallets = [
    {
        id:"2222",
        userId:"test_user_id",
        currency:"5555",
        balance:"1000",
        createDte:"2021-06-02",
        updateDte:"2021-06-02",
        status:"1",
    },
];
const userWallets1 = [
    {
        id:"2222",
        userId:"test_user_id",
        userName:"test_user_name",
        currencyId:"5555",
        currencyCurrency:"test_currency",
        balance:"1000",
        createDte:"2021-06-02",
        updateDte:"2021-06-02",
        status:"1",
    },
];
const transactions = [
    {        
        id:"3333",
        userId:"test_user_id",
        type:"test_type",
        currency:"5555",
        createDt:"2021-06-03",
        trade:"333",
        orderId:"3-3-3-3",
        desc:"test_transaction_desc",
        exchange:"4444",
        status:"1",
    }
];
const transactions1 = [
    {        
        id:"3333",
        userId:"test_user_id",
        userName:"test_user_name",
        type:"test_type",
        currencyId:"5555",
        currencyCurrency:"test_currency",
        createDt:"2021-06-03",
        trade:"333",
        desc:"test_transaction_desc",
        exchangeId:"4444",
        exchangeBuyingRate:"1",
        exchangeSellingRate:"1.5",
        status:"1",
        txid:"txid11111",
    }
];
const exchanges = [
    {
        id:"4444",
        exchangeDte:"2021-06-04",
        currency:"5555",
        exchangeCurrency:"55551",
        buyingRate:"1",
        sellingRate:"1.5",
        desc:"test_exchange_desc",
        status:"1",
    },
    {
        id:"44441",
        exchangeDte:"2021-06-66",
        currency:"55551",
        exchangeCurrency:"5555",
        buyingRate:"3",
        sellingRate:"3.5",
        desc:"test_exchange_desc",
        status:"1",
    }
];
const exchanges1 = [
    {
        id:"4444",
        exchangeDte:"2021-06-04",
        currencyId:"5555",
        currencyCurrency:"test_currency",
        exchangeCurrencyId:"55551",
        exchangeCurrencyCurrency:"test_currency1",
        buyingRate:"1",
        sellingRate:"1.5",
        desc:"test_exchange_desc",
        status:"1",
    },
    {
        id:"44441",
        exchangeDte:"2021-06-66",
        currencyId:"55551",
        currencyCurrency:"test_currency1",
        exchangeCurrencyId:"5555",
        exchangeCurrencyCurrency:"test_currency",
        buyingRate:"3",
        sellingRate:"3.5",
        desc:"test_exchange_desc",
        status:"1",
    }
];
const systemcodes = [
    {
        type:"test_type",
        code:"test_currency",
        codename:"test_codename",
        desc:"test_systemcode_desc",
        order:"test_order",
        status:"1",
    }
];
const resolvers = {
    Query: {
        userWallets(){
            // return userWallets;
            return userWallets1;
        },
        transactions(){
            // return transactions;
            return transactions1;
        },
        exchanges(){
            return exchanges;
            // return exchanges1;
        },
        currencys(){
            return currencys;
        },
        // currencyUpdate(){
        //     return currency;
        // }
    },
    Mutation: {
        addExchange(_, {exchangeDte,currency,exchangeCurrency,buyingRate,sellingRate,desc,status}){
            const storeExchange = {
                id:getRandomInt(9999),
                exchangeDte,
                currency,
                exchangeCurrency,
                buyingRate,
                sellingRate,
                desc,
                status
            }
            exchanges.push(storeExchange)
            return storeExchange
        },
        updateExchange(id,payload){
            const storeExchange = {
                id,
                ...payload
            }
            exchanges1.push(storeExchange)
            return storeExchange
        },
        deleteExchange(id){
            exchanges1.splice(3,1)
            return 'delete'
        },
        addCurrency(_, payload){
            // console.log(typeof(payload))
            const storeCurrency = {
                id: getRandomInt(9999)+'',
                ...payload
            }
            // storeCurrency['currency'] = payload.currency1[0].currency
            // storeCurrency['desc'] = payload.currency1[0].desc
            // storeCurrency['status'] = payload.currency1[0].status
            console.log(storeCurrency)
            // console.log(typeof(storeCurrency))
            currencys.push(storeCurrency)
            console.log(currencys)
            return storeCurrency
        },
        updateCurrency(id,payload){
            const storeCurrency = {
                id,
                ...payload
            }
            // storeCurrency['currency'] = payload.currency[0].currency
            // storeCurrency['desc'] = payload.currency[0].desc
            // storeCurrency['status'] = payload.currency[0].status
            currencys.push(storeCurrency)
            console.log(currencys)
            return storeCurrency
        },
        deleteCurrency(id){
            currencys.splice(3,1)
            return 'delete'
        },
    },
    UserWallet:{
        user(parent) {
            return users.filter(user => user.userId === parent.userId)
        },
        currency(parent) {
            return currencys.filter(currency => currency.id === parent.currency)
        }
    },
    Transaction:{
        user(parent) {
            return users.filter(user => user.userId === parent.userId)
        },
        currency(parent) {
            return currencys.filter(currency => currency.id === parent.currency)
        },
        exchange(parent) {
            return exchanges.filter(exchange => exchange.id === parent.exchange)
        }
    },
    Exchange:{
        currency(parent){
            return currencys.filter(currency => currency.id === parent.currency)
        },
        exchangeCurrency(parent){
            return currencys.filter(currency => currency.id === parent.exchangeCurrency)
        }
    }
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const server = new ApolloServer({
  typeDefs,
//   mocks,
  resolvers,
});
server.listen().then(({ url }) => console.log(`Server running on ${url}`));




