exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          title: "fish?!",
          body: "this aint no fish",
          rating: 1,
          business_id: "ChIJWXerz2vIxokRkue1--XSK5M",
          reviewer_id: 4
        },
        {
          title: "i like the fish",
          body: "i like to eat the fish here",
          rating: 4,
          business_id: "ChIJWXerz2vIxokRkue1--XSK5M",
          reviewer_id: 1
        },
        {
          title: "fishtown",
          body: "too many fish in this town",
          rating: 1,
          business_id: "ChIJWXerz2vIxokRkue1--XSK5M",
          reviewer_id: 2
        },
        {
          title: "pretty good",
          body: "the most cheese ive ever had",
          rating: 4.7,
          business_id: "ChIJfXqUmjHGxokReInkqMednds",
          reviewer_id: 3
        },
        {
          title: "too many cheese",
          body: "ive never seen to many cheese in my life",
          rating: 2,
          business_id: "ChIJfXqUmjHGxokReInkqMednds",
          reviewer_id: 2
        },
        {
          title: "Cheesey",
          body: "i love cheese and this place",
          rating: 5,
          business_id: "ChIJfXqUmjHGxokReInkqMednds",
          reviewer_id: 1
        },
        {
          title: "my fav spot",
          body: "gets all me records here",
          rating: 5,
          business_id: "ChIJe2CFfLnHxokR3elHkyfA868",
          reviewer_id: 1
        },
        {
          title: "1 star",
          body: "too far from my house",
          rating: 1,
          business_id: "ChIJe2CFfLnHxokR3elHkyfA868",
          reviewer_id: 2
        },
        {
          title: "no selection",
          body: "I couldnt find the record I wanted",
          rating: 1,
          business_id: "ChIJe2CFfLnHxokR3elHkyfA868",
          reviewer_id: 4
        },
        {
          title: "Its Wallmart",
          body: "very bad experience here, too many peeple",
          rating: 1,
          business_id: "ChIJS38mY9-Ga4cR5uumnlSu3kw",
          reviewer_id: 1
        },
        {
          title: "Pretty grate",
          body: "Walmart if my favrite store",
          rating: 5,
          business_id: "ChIJS38mY9-Ga4cR5uumnlSu3kw",
          reviewer_id: 3
        },
        {
          title: "meh",
          body: "its okay",
          rating: 3,
          business_id: "ChIJS38mY9-Ga4cR5uumnlSu3kw",
          reviewer_id: 4
        },
      ]);
    });
};