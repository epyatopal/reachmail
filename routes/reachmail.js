var express = require('express');
var router = express.Router();
https = require('https');
var querystring = require('querystring');

router.post('/', function(req, res) {
    var data = querystring.stringify({
        accountKey: req.query.accountID,
        username: req.query.username,
        password: req.query.password
    });
    var options = {
        host: 'go.reachmail.net',
        path: '/login/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };
    var callback = function(response) {
            c
        if(response.statusCode == 200)
            res.send({success: true})
        else
            res.send({success: false})
    }
    var request =  https.request(options, callback);
    request.write(data)
    request.end();
    request.on('error', function(e) {
        console.error(e);
    });



});

module.exports = router;
