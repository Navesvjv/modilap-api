const { ApolloServer } = require('apollo-server');
const graphql = require('./graphql/index');
const config = require('./config/index');

const UserService = require('./services/UserService');

const server = new ApolloServer({
	...graphql,
	...config,
});

server.listen(4009).then(({ url }) => {
	console.log(url);
});
