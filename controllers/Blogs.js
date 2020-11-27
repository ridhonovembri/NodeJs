const db = require('../core/db');

exports.getList = function(req, res){
    db.executeSql("SELECT * FROM Blogpost", function (data, err){
        if (err){
            res.writeHead(500,'Internal Error Occured', {'content-type': 'text/html'});
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(data));
            res.end();
        }
    })
};

exports.get = function(req, res, mhsNo){

};

exports.getList = function(req, res, reqBody){

};

exports.getList = function(req, res, reqBody){

};

exports.getList = function(req, res, reqBody){

};

