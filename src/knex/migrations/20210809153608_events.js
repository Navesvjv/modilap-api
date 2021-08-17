exports.up = function (knex) {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary(),
			table.string('name', 150).notNullable(),
			table.string('email', 100).notNullable(),
			table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
