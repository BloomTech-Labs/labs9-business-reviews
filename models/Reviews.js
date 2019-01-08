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

//PRE!!! IS A MONGODB LIFECYCLE HOOK WHEN WE CALL Business.find() THIS WILL RUN FIRST BEFORE RETURNING THE QUERY!!!
//PRE DOCS https://mongoosejs.com/docs/middleware.html
// WHAT IS THIS KEYWORD??
//THIS KEYWORD IS THE MONGOOSE SCHEMA ITSELF SO YOU CAN CALL THIS.find() THIS.findOneByIdAndUpdate()
//THIS = MONGOOSE.MODEL("BUSINESS",BUSINESSSCHEMA)

ReviewSchema.pre('find', function(next) {
  this.populate('author');
  next();
});

ReviewSchema.pre('findOne', function(next) {
  this.populate('author');
  next();
});

module.exports = mongoose.model('Review', ReviewSchema);
