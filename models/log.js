var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LogSchema = new Schema(
  {
    title: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true},
    category: [{type: Schema.ObjectId, ref: 'Category'}],
  }
);

// Virtual for log's URL
LogSchema
.virtual('url')
.get(function () {
  return '/log/' + this._id;
});

//Export model
module.exports = mongoose.model('Log', LogSchema);