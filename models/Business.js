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
  { toJSON: { virtuals: true }, toObject: { virtuals: true } } //VIRTUALS WONT APPEAR IN THE JSON OBJECT UNLESS SPECIFIED AND THIS WILL PUT THE OBJECT ON THE JSON OBJECT
);

//VIRTUALS ARE A MONGOOSE SPECIAL ATTRIBUTE THAT WILL HELP US STORE OBJECTS IN A WAY THAT IT IS SEPERATED TO OTHER FIELDS UNLESS CALLED
//VIRTUALS BY DEFAULT WONT APPEAR THROUGH THE JSON OBJECT UNLESS SPECIFIED!!! ^^^^^^^^^^^
//  DOCS -----------------> https://mongoosejs.com/docs/4.x/docs/api.html#virtualtype_VirtualType-get

BusinessSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'business'
});

//PRE!!! IS A MONGODB LIFECYCLE HOOK WHEN WE CALL Business.find() THIS WILL RUN FIRST BEFORE RETURNING THE QUERY!!!
//PRE DOCS https://mongoosejs.com/docs/middleware.html
// WHAT IS THIS KEYWORD??
//THIS KEYWORD IS THE MONGOOSE SCHEMA ITSELF SO YOU CAN CALL THIS.find() THIS.findOneByIdAndUpdate()
//THIS = MONGOOSE.MODEL("BUSINESS",BUSINESSSCHEMA)

BusinessSchema.pre('find', function(next) {
  this.populate('reviews');
  next();
});
BusinessSchema.pre('findOne', function(next) {
  this.populate('reviews');
  next();
});

module.exports = mongoose.model('Business', BusinessSchema);
