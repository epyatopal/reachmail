var express = require('express');
var router = express.Router();
var accountSid = 'AC764b26b8ce37703247a8a64ac09db6f1';
var authToken = "d54ca891cb8ae368a2c3701ed3165ad7";
var client = require('twilio')(accountSid, authToken);

/* GET users listing. */
router.get('/', function(req, res) {

    client.calls.create({
        url: "https://demo.twilio.com/welcome/voice/",
        to: "+14843094265",
        from: "+79885865058"
    }, function(err, call) {
        console.log('error=  ', err)
        console.log('call = ', call)
//        res.send(call.sid);
    });
});

module.exports = router;

//+79198784210
//9081777954
