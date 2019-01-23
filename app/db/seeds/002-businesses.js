exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          id: 'ChIJWXerz2vIxokRkue1--XSK5M',
          name: 'La Columbe Fishtown',
          rating: 4.1,
          image:
            'https://vista.today/wp-content/uploads/2018/10/Philly_LaColombe-Fishtown2_0.jpg'
        },
        {
          id: 'ChIJZd6bwGvIxokRZ0faNoNHsoA',
          name: 'The El Bar',
          rating: 3.2,
          image:
            'http://fishtownbeerrunners.com/wp-content/uploads/2015/12/The-El-Bar-.jpg'
        },
        {
          id: 'ChIJfXqUmjHGxokReInkqMednds',
          name: 'DiBruno Brothers Rittenhouse',
          rating: 5,
          image:
            'https://www.dibrunocatering.com/wp-content/uploads/2014/07/theoriginalphoto-2048x1418.jpg'
        },
        {
          id: 'ChIJe2CFfLnHxokR3elHkyfA868',
          name: 'Brewery Town Beats',
          rating: 4.2,
          image: 'http://thekey.xpn.org/aatk/files/2017/05/IMG_9639-620x413.jpg'
        }
      ]);
    });
};
