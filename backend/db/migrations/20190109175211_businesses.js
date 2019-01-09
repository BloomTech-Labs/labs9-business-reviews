exports.up = function(knex, Promise) {
  return knex.schema.createTable('businesses', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('address').unique();
    table.string('hours').notNullable();
    table.integer('rating').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('businesses');
};
