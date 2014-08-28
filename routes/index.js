var express = require('express')
    , router = express.Router()

router.get('/success', function(req, res){
    res.render('success');
})

router.get('/', function(req, res){
    res.render('index');
})

module.exports = router;
