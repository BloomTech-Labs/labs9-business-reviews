exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').unique();
    table.string('password').notNullable();
    table.string('gravatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
