import { knex } from '../../knex/index.js';

const user = async (_, { id }, __) => {
	return knex
		.select()
		.from('users')
		.where({
			id: id,
		})
		.first();
};

const users = (_, { limit, offset }) => {
	return knex.select().from('users').limit(limit).offset(offset);
};

const createUser = async (_, args, __) => {
	const id = await knex.returning('id').insert(args).into('users');
	return await knex.select().from('users').where({ id: id[0] }).first();
};

export const usersResolvers = {
	Query: { user, users },
	Mutation: { createUser },
};
