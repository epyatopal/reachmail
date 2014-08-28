var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('config')

router.post('/', function(req, res) {

    if(req.query){
        pg.connect(config.conString, function(err, client){
            client.query("SELECT * FROM person WHERE accountid = $1",[req.query.accountID], function(err, result){
                if(err){
                    res.send({success:false})
                }
                else{
                    if(result.rows.length > 0){
                        client.query("UPDATE person SET username = $1, password = $2, phone = $3, status = $4, sid = $6 WHERE accountid = $5;",[req.query.username, req.query.password, req.query.phone, req.query.status, req.query.accountID, req.query.sid], function(err, resultDB){
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
                        client.query("INSERT INTO person (accountID, username, password, phone, status, sid) VALUES($1, $2, $3, $4, $5, $6);",[req.query.accountID, req.query.username, req.query.password, req.query.phone, req.query.status, req.query.sid], function(err, resultDB){
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
