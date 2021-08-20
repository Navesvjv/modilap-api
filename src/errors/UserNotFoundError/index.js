class UserNotFoundError extends Error {
	constructor(message = 'Usuário não encontrado!', ...args) {
		super(message, ...args);

		this.message = message;
		this.name = 'UserNotFoundError';
	}
}

module.exports = UserNotFoundError;
