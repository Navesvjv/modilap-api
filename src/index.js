import { ApolloServer } from 'apollo-server';
const graphql = require('./src/graphql');

const server = new ApolloServer({
	...graphql,
});

server.listen(4009).then(({ url }) => {
	console.log(`Server listening on url ${url}`);
});
