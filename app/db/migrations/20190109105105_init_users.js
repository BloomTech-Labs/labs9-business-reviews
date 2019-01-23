exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', user => {
    user.increments('id');
    user.string('name').notNullable();
    user.string('email').unique();
    user.string('password').notNullable();
<<<<<<< HEAD
    user
      .string('billing_id')
      .defaultTo(null)
      .unique();
=======
    user.string('billing_id').defaultTo(null);
>>>>>>> 96e5e78fa1e018903e815dfa228729c3171e4559
    user.string('reset_token');
    user.string('gravatar');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
