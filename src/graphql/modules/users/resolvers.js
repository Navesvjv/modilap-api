const { createToken } = require('../../../helpers/generator');

module.exports = {
	Query: {
		// user: async (_, { id }, { dataSources, validate }) => {
		// 	const token_id = validate();
		// 	const u = await dataSources.userService.user(token_id, id);
		// 	u.token = createToken(u.id);
		// 	return u;
		// },
		// users: async (_, { limit, offset }, { dataSources, validate }) => {
		// 	const token_id = validate();
		// 	return await dataSources.userService.users(token_id, limit, offset);
		// },
		login: async (_, { data }, { dataSources }) => {
			return await dataSources.userService.login(data);
		},
	},
	Mutation: {
		createUser: async (_, { data }, { dataSources }) => {
			await dataSources.userService.createUser(data);
		},
		updateUser: async (_, { id, data }, { dataSources, validate }) => {
			const token_id = validate();
			return await dataSources.userService.updateUser(token_id, id, data);
		},
		deleteUser: async (_, { filter }, { dataSources, validate }) => {
			const token_id = validate();
			return await dataSources.userService.deleteUser(token_id, filter);
		},
	},
};
