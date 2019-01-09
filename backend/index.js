const express = require('express');

const userRoutes = require('./Routes/userRoutes');

const server = express();

const authMiddleware = require('./authMiddlewares');

// TO AVOID USING SESSIONS WE WILL JUST USE COOKIES TO HAVE LESS CODE FOR AUTHENTICATION AND STORING THE USER DATA ON REQ.USER FOR EVERY REQUEST IN THE DATABASE
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 4000;

server.use(cookieParser());
server.use(express.json());

authMiddleware(server);

server.use('/api/user', userRoutes);

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
