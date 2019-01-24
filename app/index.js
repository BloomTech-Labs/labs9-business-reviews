require('dotenv').config();
const express = require('express');
// TO AVOID USING SESSIONS WE WILL JUST USE COOKIES TO HAVE LESS CODE FOR AUTHENTICATION AND STORING THE USER DATA ON REQ.USER FOR EVERY REQUEST IN THE DATABASE
const cookieParser = require('cookie-parser');
const authMiddleware = require('./authMiddlewares');
// Please do not move or touch inside the files -- Carlo
const userRouter = require('./user/userRouter');
const reviewRouter = require('./reviews/reviewRouter');
const businessRouter = require('./businesses/businessRouter');
const stripeRouter = require('./stripe/stripeRouter');
const billingRouter = require('./stripe/billingRouter');
const cors = require('cors');


const server = express();
const port = process.env.PORT || 9000;

// /* uncomment this when on development on localhost:3000 */
server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// server.use(cors());
/* use this cors on production */
// server.use(cors({ credentials: true, origin: 'https://bonafind.netlify.com' }));
server.use(cookieParser());
authMiddleware(server);
server.use(express.json());

// R O U T E S
server.use('/api/business', businessRouter);
server.use('/api/user', userRouter);
server.use('/api/review', reviewRouter);
server.use('/api/billing', stripeRouter);
server.use('/api/checkout', billingRouter);
require('./user/passport');

// R O O T  R O U T E
server.get('/', (req, res) => {
  res.send('API root.');
});

server.listen(port, () => {
  console.log(`port running on ${port}`);
});

module.exports = server;
