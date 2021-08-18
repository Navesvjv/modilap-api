const db = require('../../../knex/index.js');

module.exports = {
	Query: {
		user: async (_, { id }) => await db('users').where({ id }).first(),
		users: async (_, { limit, offset }) => await db('users').limit(limit).offset(offset),
	},
	Mutation: {
		createUser: async (_, { data }) => await (await db('users').insert(data).returning('*'))[0],
		updateUser: async (_, { id, data }) => await (await db('users').where({ id }).update(data).returning('*'))[0],
		deleteUser: async (_, { filter }) => {
			if (filter.id) return await db('users').where({ id: filter.id }).delete();
			if (filter.email) return await db('users').where({ email: filter.email }).delete();
			throw new Error('Favor passar um parametro!');
		},
	},
};
