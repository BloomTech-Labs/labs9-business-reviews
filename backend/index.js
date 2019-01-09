const express = require('express');

const server = express();

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
