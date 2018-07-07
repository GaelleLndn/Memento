var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
  {
    label: {type: String, required: true, max: 100},
    log: [{type: Schema.ObjectId, ref: 'Log'}]
  }
);

// Virtual for category's URL
CategorySchema
.virtual('url')
.get(function () {
  return '/category' + this._id;
});

//Export model
module.exports = mongoose.model('Category', CategorySchema);