exports.up = function (knex) {
	return knex.schema.createTable('users', table => {
		table.increments('increments').primary(),
			table.string('id', 15).notNullable().unique(),
			table.string('name', 150).notNullable(),
			table.string('email', 100).notNullable().unique(),
			table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
