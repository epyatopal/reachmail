var express = require('express');
var router = express.Router();
var config = require('config')
var client = require('twilio')(config.accountSid, config.authToken);


router.post('/', function(req, res) {

    client.calls.create({
        url: "https://demo.twilio.com/welcome/voice/",
        to: req.query.phone,
        from: config.numberPhone
    }, function(err, call) {

        res.send({sid:call.sid, accountID:req.query.accountID, username:req.query.username, password:req.query.password, phone:req.query.phone, status:call.status})

    });
});

router.get('/:id', function(req, res) {

    client.calls(req.params.id).get(function(err, call) {

        res.send(call)
    });
});

module.exports = router;


