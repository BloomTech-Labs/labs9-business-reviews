const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ReviewSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply a User'
  },
  business: {
    type: mongoose.Schema.ObjectId,
    ref: 'Business',
    required: 'You must supply a Business'
  },
  text: { type: String, required: 'You must have a text' }
});

ReviewSchema.pre('find', function(next) {
  this.populate('author');
  next();
});

ReviewSchema.pre('findOne', function(next) {
  this.populate('author');
  next();
});

module.exports = mongoose.model('Review', ReviewSchema);
