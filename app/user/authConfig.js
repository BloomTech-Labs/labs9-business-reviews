const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const db = require('../db/dbinit');

const store = new KnexSessionStore({
  tablename: 'sessions',
  sidfieldname: 'sid',
  knex: db,
  clearInterval: 1000 * 60 * 60 * 24,
  createtable: true
}); // defaults to a sqlite3 database

exports.store = store;
