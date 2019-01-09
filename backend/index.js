const express = require('express');

const userRoutes = require('./Routes/userRoutes');

const server = express();

const port = process.env.PORT || 4000;

server.use('/user', userRoutes);

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
