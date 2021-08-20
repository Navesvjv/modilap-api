class UserAlreadyExistsError extends Error {
	constructor(message = 'Usuário já existe!', ...args) {
		super(message, ...args);

		this.message = message;
		this.name = 'UserAlreadyExistsError';
	}
}

module.exports = UserAlreadyExistsError;
