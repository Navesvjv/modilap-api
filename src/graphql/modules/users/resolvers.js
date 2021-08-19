module.exports = {
	Query: {
		user: async (_, { id }, ctx) => await ctx.userService.user(id),
		users: async (_, { limit, offset }, ctx) => await ctx.userService.users(limit, offset),
	},
	Mutation: {
		createUser: async (_, { data }, ctx) => await ctx.userService.createUser(data),
		updateUser: async (_, { id, data }, ctx) => await ctx.userService.updateUser(id, data),
		deleteUser: async (_, { filter }, ctx) => await ctx.userService.deleteUser(filter),
	},
};
