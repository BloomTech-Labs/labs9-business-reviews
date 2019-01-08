const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const BusinessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'You must supply a string'
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: 'You must supply an author'
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

BusinessSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'business'
});

BusinessSchema.pre('find', function(next) {
  this.populate('reviews');
  next();
});
BusinessSchema.pre('findOne', function(next) {
  this.populate('reviews');
  next();
});

module.exports = mongoose.model('Business', BusinessSchema);
