exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', review => {
    review.increments('id');
    review.string('title').notNullable();
    review.string('body', 1000).notNullable();
    review.float('rating');
    review.string('business_image');
    review.string('business_name');
    review.string('business_id');
    review.integer('reviewer_id');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
