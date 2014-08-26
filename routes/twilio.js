var express = require('express');
var router = express.Router();
var accountSid = 'AC58b6ca6384edacd2d4f4aabfe90f8cd9';
var authToken = "7af911c6880975740ebee37af4c5f66a";
var numberPhone = "+18477363872"
var client = require('twilio')(accountSid, authToken);


router.post('/', function(req, res) {
    console.log('params = ', req.query)

    client.calls.create({
        url: "https://demo.twilio.com/welcome/voice/",
        to: "+18477363872",
        from: numberPhone
    }, function(err, call) {
        console.log('error=  ', err)
        console.log('call = ', call)
        res.send(call);
    });
});

module.exports = router;

//+79198784210
//9081777954
