exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user => {
    user.increments();
    user.string('name').notNullable();
    user.string('email').unique();
    user.string('password').notNullable();
    user.string('gravatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
