import { knex } from '../../knex/index.js';

const selectAll = id => {
	console.log(knex.select().from('users').where({ id: id }).first());
};

const user = async (_, { id }, __) => {
	return await knex
		.select()
		.from('users')
		.where({
			id,
		})
		.first();
};

const users = async (_, { limit, offset }) => {
	return await knex.select().from('users').limit(limit).offset(offset);
};

const createUser = async (_, args, __) => {
	args['id'] = new Date().getTime().toString();
	const id = await knex.returning('id').insert(args).into('users');
	return await knex.select().from('users').where({ id: id[0] }).first();
};

const updateUser = async (_, args, __) => {
	const id = await knex('users').returning('id').where({ id: args.id }).update(args);
	return await knex.select().from('users').where({ id: id[0] }).first();
};

const deleteUser = async (_, { id }, __) => {
	const a = await knex('users').where({ id }).del();
	return 'Deletado!';
};

export const usersResolvers = {
	Query: { user, users },
	Mutation: { createUser, updateUser, deleteUser },
};
