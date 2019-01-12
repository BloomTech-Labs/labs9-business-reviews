exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.decimal('rating');
        table.int('business_id').references('id').inTable('businesses');
        table.int('reviewer_id').references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
