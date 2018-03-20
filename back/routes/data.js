var express = require('express');
var router = express.Router();
var portfolio = require('./portfolio');
var year = require('./year');
var dataObj = {};

portfolio.find({},function(err, docs){
    dataObj.data = docs;
});

year.find({},function(err, docs){
    dataObj.yearData = docs;
});

router.get('/', function(req, res, next){
  res.send(dataObj);
});

module.exports = router;
