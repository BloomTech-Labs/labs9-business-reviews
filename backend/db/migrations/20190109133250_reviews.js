exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('body').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
