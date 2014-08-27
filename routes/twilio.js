var express = require('express');
var router = express.Router();
var config = require('config')
var client = require('twilio')(config.accountSid, config.authToken);


router.post('/', function(req, res) {
    console.log('params = ', req.query)

    client.calls.create({
        url: "https://demo.twilio.com/welcome/voice/",
        to: req.query.phone,
        from: config.numberPhone
    }, function(err, call) {
        console.log('error=  ', err)
        console.log('call = ', call)
        res.send({sid:call.sid, accountID:req.query.accountID, username:req.query.username, password:req.query.password, phone:req.query.phone, status:call.status})

    });
});

module.exports = router;


