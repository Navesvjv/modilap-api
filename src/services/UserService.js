const NoPermissionError = require('../errors/NoPermissionError');
const UserAlreadyExistsError = require('../errors/UserAlreadyExistsError');
const WrongPasswordError = require('../errors/WrongPasswordError');
const UserNotFoundError = require('../errors/UserNotFoundError');

const db = require('../knex');
const { createToken } = require('../helpers/generator');
const bcrypt = require('bcrypt');

class UserService {
	constructor(db) {
		this.db = db;
	}

	// async user(token_id, id) {
	// 	const u = await this.db('users').where({ id }).first();
	// 	if (token_id != u.id) throw new NoPermissionError();
	// 	return u;
	// }

	// async users(token_id, limit, offset) {
	// 	return await this.db('users').limit(limit).offset(offset);
	// }

	async login(data) {
		const u = await this.db('users').where({ email: data.email }).first();

		if (!u) throw new UserNotFoundError();

		const pwdCompare = await bcrypt.compare(data.pwdhash, u.pwdhash);

		if (!pwdCompare) throw new WrongPasswordError();

		u['token'] = createToken(u.id);

		u['pwdhash'] = '';
		return u;
	}

	async createUser(data) {
		const u = await this.db.select('id').from('users').where({ email: data.email }).first();
		if (u) throw new UserAlreadyExistsError();

		data['id'] = new Date().getTime().toString();
		data['pwdhash'] = await bcrypt.hash(data.pwdhash, 12);
		return await (
			await this.db('users').insert(data).returning('*')
		)[0];
	}

	async updateUser(token_id, id, data) {
		return await (
			await this.db('users').where({ id }).update(data).returning('*')
		)[0];
	}

	async deleteUser(token_id, filter) {
		if (filter.id) return await this.db('users').where({ id: filter.id }).delete();
		if (filter.email) return await this.db('users').where({ email: filter.email }).delete();
		throw new Error('Favor passar um parametro!');
	}
}

module.exports = new UserService(db);

// Adicionar Try Catch
