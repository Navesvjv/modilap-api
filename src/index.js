const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		ola: String
	}
`;

const resolvers = {};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen(4444).then(({ url }) => {
	console.log(`Executando em ${url}`);
});
