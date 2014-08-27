var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('config')
//var conString = "postgres://root:root@localhost/reachmail";




router.post('/', function(req, res) {
//    var client = new pg.Client(conString);
//    client.connect();
    if(req.query){
        pg.connect(config.conString, function(err, client){
            client.query("SELECT * FROM person WHERE accountid = $1",[req.query.accountID], function(err, result){
                console.log('errr = ',err)
                console.log('result = ',result)
                if(err){
                    res.send({success:false})
                }
                else{
                    if(result.rows.length > 0){
                        client.query("UPDATE person SET username = $1, password = $2, phone = $3, status = $4 WHERE accountid = $5;",[req.query.username, req.query.password, req.query.phone, req.query.status, req.query.accountID], function(err, resultDB){
                            if(err){
                                res.send({success:false})
                            }
                            else
                            {
                                res.send({success:true})
                            }
                        })
                    }
                    else{
                        client.query("INSERT INTO person VALUES($1, $2, $3, $4, $5);",[req.query.accountID, req.query.username, req.query.password, req.query.phone, req.query.status], function(err, resultDB){
                            if(err){
                                res.send({success:false})
                            }
                            else
                            {
                                res.send({success:true})
                            }
                        })
                    }
                }

            })
        })
    }

});

module.exports = router;



//+18445691627
