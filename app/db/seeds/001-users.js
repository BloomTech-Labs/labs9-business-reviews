exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Edd Burke',
          email: 'eabummings@gmail.com',
          password: 'password',
          gravatar: 'https://avatars2.githubusercontent.com/u/34618112?s=80'
        },
        {
          name: 'Carlo Clamucha',
          email: 'carlo@carlo.com',
          password: 'password',
          gravatar: 'https://avatars3.githubusercontent.com/u/41533016?s=80'
        },
        {
          name: 'Alex Dykas',
          email: 'alex@alex.com',
          password: 'password',
          gravatar: 'https://avatars2.githubusercontent.com/u/34108291?s=80'
        },
        {
          name: 'Brad Mortensen',
          email: 'brad@brad.com',
          password: 'password',
          gravatar: 'https://avatars1.githubusercontent.com/u/40773193?s=80'
        }
      ]);
    });
};
