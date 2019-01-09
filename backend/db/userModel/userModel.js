const db = require('../dbinit');

module.exports = { register, getUsers, verifyLoginEmail };

function register(user) {
  return db('users').insert(user);
}

function getUsers() {
  return db('users');
}

function verifyLoginEmail(email) {
  return db('users').where({ email: email });
}
