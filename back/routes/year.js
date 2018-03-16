var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yearSchema = new Schema({
    yearID: Number,
    year: String,
}, { collection: 'year' });

module.exports = mongoose.model('year', yearSchema);
