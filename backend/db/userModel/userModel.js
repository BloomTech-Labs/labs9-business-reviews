const db = require('../dbinit');

module.exports = { register, getUsers, verifyLoginEmail, getUserById };

function register(user) {
  return db('users').insert(user);
}

function getUsers() {
  return db('users');
}

function verifyLoginEmail(email) {
  return db('users').where({ email: email });
}

function getUserById(id) {
  return db('users').where({ id });
}

function updateUser(id, user) {
  return db('users')
    .where({ id })
    .update(user);
}

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}
