exports.up = function(knex, Promise) {
  return knex.schema.createTable('businesses', table => {
    table.increments();
    table.string('name').notNullable();
    table.float('rating', 2, 1);
    table.string('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('businesses');
};
