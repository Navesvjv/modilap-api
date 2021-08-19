const { ApolloServer } = require('apollo-server');
const graphql = require('./graphql');
const UserService = require('./services/UserService');

const server = new ApolloServer({
	...graphql,
	context: () => ({
		userService: UserService,
	}),
});

server.listen(4009).then(({ url }) => {
	console.log(url);
});
