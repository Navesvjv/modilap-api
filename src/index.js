const { ApolloServer } = require('apollo-server');
const graphql = require('./graphql');

const server = new ApolloServer({
	...graphql,
});

server.listen(4009).then(({ url }) => {
	console.log(url);
});
