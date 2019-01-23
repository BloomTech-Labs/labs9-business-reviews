exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        {
        title:"good",
        body:"this food is good",
        rating: 4.7,
        business_id:"ChIJZd6bwGvIxokRZ0faNoNHsoA",
        reviewer_id:1
        }
      ]);
    });
};
