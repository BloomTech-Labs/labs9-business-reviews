exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', review => {
      review.increments('id');
      review.string('title').notNullable();
      review.string('body', 1000).notNullable();
      review.float('rating');
      review.integer('business_id').references('id').inTable('businesses');
      review.integer('reviewer_id').references('id').inTable('users');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
