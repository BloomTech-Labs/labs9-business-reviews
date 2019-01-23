
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          "id":"ChIJEcsZ_tl_j4ARvB0cCBBjTnQ",
          "name":"Lambda Labs",
          "rating": 4.9,
          "image":"https://loremflickr.com/400/400/lambda"
        }
      ]);
    });
};
