exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user => {
    user.increments('id');
    user.string('name').notNullable();
    user.string('email').unique();
    user.string('password').notNullable();
    user.date('subscription');
    user.string('reset_token');
    user.string('gravatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
