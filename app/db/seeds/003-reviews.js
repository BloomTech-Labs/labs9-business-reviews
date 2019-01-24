exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          title: 'fish?!',
          body: 'this aint no fish',
          rating: 1,
          business_image:
            'https://www.dibrunocatering.com/wp-content/uploads/2014/07/theoriginalphoto-2048x1418.jpg',
          business_name: 'La Columbe Fishtown',
          business_id: 'ChIJWXerz2vIxokRkue1--XSK5M',
          reviewer_id: 1
        },
        {
          title: 'fishtown',
          body: 'too many fish in this town',
          rating: 1,
          business_id: 'ChIJWXerz2vIxokRkue1--XSK5M',
          reviewer_id: 2
        },
        {
          title: 'pretty good',
          body: 'the most cheese ive ever had',
          rating: 4.7,
          business_image:
            'http://localhost:3000/business/ChIJfXqUmjHGxokReInkqMednds',
          business_name: 'DiBruno Brothers',
          business_id: 'ChIJfXqUmjHGxokReInkqMednds',
          reviewer_id: 1
        },
        {
          title: 'too many cheese',
          body: 'ive never seen to many cheese in my life',
          rating: 2,
          business_id: 'ChIJfXqUmjHGxokReInkqMednds',
          reviewer_id: 2
        },
        {
          title: 'my fav spot',
          body: 'gets all me records here',
          rating: 5,
          business_image:
            'http://thekey.xpn.org/aatk/files/2017/05/IMG_9639-620x413.jpg',
          business_name: 'Brewery Town Beats',
          business_id: 'ChIJe2CFfLnHxokR3elHkyfA868',
          reviewer_id: 1
        },
        {
          title: '1 star',
          body: 'too far from my house',
          rating: 1,
          business_id: 'ChIJe2CFfLnHxokR3elHkyfA868',
          reviewer_id: 2
        },
        {
          title: 'no selection',
          body: 'I couldnt find the record I wanted',
          rating: 1,
          business_id: 'ChIJe2CFfLnHxokR3elHkyfA868',
          reviewer_id: 4
        },
        {
          title: 'The El Bar',
          body: 'very bad experience here, too many peeple',
          rating: 1,
          business_image:
            'http://fishtownbeerrunners.com/wp-content/uploads/2015/12/The-El-Bar-.jpg',
          business_name: 'The El Bar',
          business_id: 'ChIJS38mY9-Ga4cR5uumnlSu3kw',
          reviewer_id: 1
        },
        {
          title: 'Pretty grate',
          body: 'Walmart if my favrite store',
          rating: 5,
          business_id: 'ChIJS38mY9-Ga4cR5uumnlSu3kw',
          reviewer_id: 3
        },
        {
          title: 'meh',
          body: 'its okay',
          rating: 3,
          business_id: 'ChIJS38mY9-Ga4cR5uumnlSu3kw',
          reviewer_id: 4
        }
      ]);
    });
};
