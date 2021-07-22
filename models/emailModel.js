let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let emailSchema = new Schema({
  id: String,
  email: String,
  name: String,
  text: String,
  date: Date,
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
