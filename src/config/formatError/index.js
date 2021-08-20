const NoPermissionError = require('../../errors/NoPermissionError');
const UserAlreadyExistsError = require('../../errors/UserAlreadyExistsError');
const UserNotFoundError = require('../../errors/UserNotFoundError');
const WrongPasswordError = require('../../errors/WrongPasswordError');

module.exports = (error) => {
	if (error.originalError instanceof NoPermissionError) return new Error(error.message);

	if (error.originalError instanceof UserNotFoundError) return new Error(error.message);

	if (error.originalError instanceof UserAlreadyExistsError) return new Error(error.message);

	if (error.originalError instanceof WrongPasswordError) return new Error(error.message);
	return error;
};
