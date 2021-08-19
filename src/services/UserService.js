const db = require('../knex/index');

class UserService {
	constructor(db) {
		this.db = db;
	}

	user = async id => await this.db('users').where({ id }).first();

	users = async (limit, offset) => await this.db('users').limit(limit).offset(offset);

	createUser = async data => await (await this.db('users').insert(data).returning('*'))[0];

	updateUser = async (id, data) => await (await this.db('users').where({ id }).update(data).returning('*'))[0];

	deleteUser = async filter => {
		if (filter.id) return await this.db('users').where({ id: filter.id }).delete();
		if (filter.email) return await this.db('users').where({ email: filter.email }).delete();
		throw new Error('Favor passar um parametro!');
	};
}

module.exports = new UserService(db);
