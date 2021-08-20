const jwt = require('jsonwebtoken');

module.exports = {
	createToken(id) {
		return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
	},

	verifyToken(token) {
		return jwt.verify(token, process.env.JWT_SECRET);
	},
};
