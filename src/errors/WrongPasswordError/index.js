class WrongPasswordError extends Error {
	constructor(message = 'Senha incorreta!', ...args) {
		super(message, ...args);

		this.message = message;
		this.name = 'WrongPasswordError';
	}
}

module.exports = WrongPasswordError;
