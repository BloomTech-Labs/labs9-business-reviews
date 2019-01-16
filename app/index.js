const express = require('express');
// TO AVOID USING SESSIONS WE WILL JUST USE COOKIES TO HAVE LESS CODE FOR AUTHENTICATION AND STORING THE USER DATA ON REQ.USER FOR EVERY REQUEST IN THE DATABASE
const cookieParser = require('cookie-parser');
const authMiddleware = require('./authMiddlewares');
// Please do not move or touch inside the files -- Carlo
const userRouter = require('./user/userRouter');
const reviewRouter = require('./reviews/reviewRouter');
const businessRouter = require('./businesses/businessRouter');
const cors = require('cors');

const server = express();
const knex = require('knex');
const port = process.env.PORT || 9000;

// server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
server.use(cors());
server.use(cookieParser());
authMiddleware(server);
server.use(express.json());

// R O U T E S
server.use('/api/business', businessRouter);
server.use('/api/user', userRouter);
server.use('/api/review', reviewRouter);
// R O O T  R O U T E
server.get('/', (req, res) => {
  res.send('API root.');
});

server.listen(port, () => {
  console.log(`port running on ${port}`);
});

module.exports = server;
