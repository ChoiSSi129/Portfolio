var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    url: String,
    title: String,
    text: String,
    yearID: Number
}, { collection: 'data' });

module.exports = mongoose.model('data', PortfolioSchema);
