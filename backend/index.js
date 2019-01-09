const express = require('express');
const server = express();
const knex = require('knex');
const port = 9000;

server.use(express.json());

// R O O T  R O U T E
server.get('/', (req, res) => {
  res.send('API root.');
});

// R O U T E S
server.use('/api/business', businessRouter);
server.use('/api/user', userRouter);
server.use('/api/review', reviewRouter);

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
