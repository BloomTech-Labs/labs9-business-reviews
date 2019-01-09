
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', table => {
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
