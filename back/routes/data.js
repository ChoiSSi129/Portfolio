var express = require('express');
var router = express.Router();
var portfolio = require('./portfolio');
var year = require('./year');
var dataObj = {};

function dataBind(yearID){
    return new Promise(function(resolve, reject){
        year.find({},function(err, docs){
            dataObj.yearData = docs;
        });
        portfolio.find({},function(err, docs){
            if(!yearID || yearID === 0){
                dataObj.data = docs;
            } else{
                dataObj.data = [];
                for(var i=0; i<docs.length; i++){
                    if(yearID === docs[i].yearID){
                        dataObj.data.push(docs[i]);
                    }
                }
            }
            resolve(dataObj);
        });
    });
}

router.get('/', function(req, res, next){
    var year = Number(req.query.year);
    dataBind(year).then(function(data){
        res.send(data);
    });
    
});

module.exports = router;
