class NoPermissionError extends Error {
	constructor(message = 'Você não tem permissão!', ...args) {
		super(message, ...args);

		this.message = message;
		this.name = 'NoPermissionError';
	}
}

module.exports = NoPermissionError;
