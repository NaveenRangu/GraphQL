const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Query {
    hello: String!
    randomNumber: Int!

}

type Client{
    clientIntID: int!
    clientID: String!
    deleteFg: 

    ClietIndividual: ClietIndividual
    ClientAddress: [ClientAddress]!
}

type ClietIndividual{
    clientIntID: int!
    firstName: String!
    lastName: String!
    occupation: String!
    spouseFirstName: String
    federalTaxID: String

    client: Client!
}

type ClientAddress{
    addrLine1: String!
    addrLine2: String!
    addrLine3: String
    city: String!
    clientAddressIntID: int!
    clientIntID: int!
    firmAddrTypeIntID: int
    postalCode: String
    stateOrRegion: String!


    client: Client!
}`

const resolvers = {
    // The name of the resolver must match the name of the query in the typeDefs
    Query: {
        hello: () => "Hello world!",
        randomNumber: () => Math.round(Math.random() * 10),
        clients: () => clients
    },
};

let clients = [];


// Create an instance of ApolloServer and pass in our typeDefs and resolvers
// If the object key and value have the same name, you can omit the key
const server = new ApolloServer({
    typeDefs: typeDefs, resolvers: resolvers,
});

// Start the server at port 8080
server.listen({ port: 8080 }).then(({ url }) => console.log(`GraphQL server running at ${url}`));