const express = require('express');
// TO AVOID USING SESSIONS WE WILL JUST USE COOKIES TO HAVE LESS CODE FOR AUTHENTICATION AND STORING THE USER DATA ON REQ.USER FOR EVERY REQUEST IN THE DATABASE
const cookieParser = require('cookie-parser');
const authMiddleware = require('./authMiddlewares');
// Please do not move or touch inside the files -- Carlo
const userRouter = require('./user/userRouter');
const businessRouter = require('./businesses/businessRouter');
// const reviewRouter = require('./review/reviewRouter');

const server = express();
const port = 9000 || process.env.PORT;

server.use(cookieParser());
server.use(express.json());

authMiddleware(server);

// R O U T E S
server.use('/api/business', businessRouter);
server.use('/api/user', userRouter);
// server.use('/api/review', reviewRouter);
// R O O T  R O U T E
server.get('/', (req, res) => {
  res.send('API root.');
});

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
