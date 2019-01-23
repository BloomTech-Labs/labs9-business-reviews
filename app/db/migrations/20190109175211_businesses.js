exports.up = function(knex, Promise) {
  return knex.schema.createTable('businesses', business => {
    business.string('id').unique();
    business.string('name').notNullable();
    business.float('rating', 2, 1);
    business.string('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('businesses');
};
