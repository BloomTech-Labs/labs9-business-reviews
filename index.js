const express = require('express');

const server = express();
const mongoose = require('mongoose');
const port = 4000 || process.env.PORT;
const Business = require('./models/Business');
const ConfigMiddleware = require('./Middleware');
const UserRoutes = require('./Routes/UserRoutes');
const BusinessRoutes = require('./Routes/BusinessRoutes');
const ReviewRoutes = require('./Routes/ReviewsRoutes');

//MIDDLEWARE CONFIG
ConfigMiddleware(server);
//THIS WILL WILL TELL PASSPORT WHAT TO DO WHEN USER IS AUTHENTICATED/LOGGED IN
require('./public/passport');

server.use('/user', UserRoutes);
server.use('/business', BusinessRoutes);
server.use('/reviews', ReviewRoutes);

//CONNECT TO THE DATABASE
//COPY THE LINK TO COMPASS TO HAVE ACCESS TO THE DATABASE
mongoose.connect(
  'mongodb://carlo:carloc1@ds049436.mlab.com:49436/business-reviews-labs',
  { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

server.listen(port, () => {
  console.log(`port running on ${port}`);
});
server.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ message: req.user });
  }
  return res.json({ message: 'Not authenticated please login' });
});

// server.post('/', async (req, res) => {
//   const business = await new Business(req.body).save();
//   res.json({ business, message: 'Successfully put up a business' });
// });
