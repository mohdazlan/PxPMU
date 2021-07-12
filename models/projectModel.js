const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const projectSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    date: Date,
    description: String,
    text: String,
    eventDate: Date,
    location: String,
    imageURL: String,
    donation: {
      type: Number,
      //  required: [true, 'A tour must have a price']
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// tourSchema.index({ price: 1 });
// projectSchema.index({ price: 1, ratingsAverage: -1 });
// projectSchema.index({ slug: 1 });
// //projectSchema.index({ startLocation: '2dsphere' });

// projectSchema.virtual('durationWeeks').get(function () {
//   return this.duration / 7;
// });

// // Virtual populate
// projectSchema.virtual('reviews', {
//   ref: 'Review',
//   foreignField: 'place',
//   localField: '_id',
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// projectSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// tourSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// tourSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
