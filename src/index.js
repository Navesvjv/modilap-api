import { ApolloServer, gql } from 'apollo-server';

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

server.listen().then(({ url }) => {
	console.log(`Executando em ${url}`);
});
