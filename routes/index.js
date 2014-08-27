var express = require('express')
    , router = express.Router()
//    , reachmail = require('../libs/reachmailapi.js')
//    , api = new reachmail({token: 'v2IhI1xX5KcIuX9yUkJ2DWDmetsDVBsLimJUHwx10Ebpw4oueh0i1PKNbAIax7A2'})
//    , casual = require('casual')
//    , async = require('async')
//    , _ = require('underscore');

router.get('/success', function(req, res){
    console.log('HERE')
    res.render('success');
})

router.get('/', function(req, res){
    res.render('index');
//    api.get('/administration/users/current', function (http_code, response) {
//        if (http_code != 200) return res.send(http_code);
//        var accountId  = response.AccountId
//            , listName = casual.title;
//        api.post('/lists/' + accountId
//            , JSON.stringify({
//                "Name": listName
//                , "Type": "Recipient"
//                , "Fields" : ['Email', 'FullName', 'Phone']
//            })
//            , function(http_code, response){
//                if (http_code != 200) return res.send(http_code);
//                var listId = response.Id;
//                async.series(merchAPIHelper.populateListFunstions(accountId, listId), function(err, results){
//                    var optNumbers = casual.array_of_digits(n = 2)
//                        , emails = merchAPIHelper.getEmails()
//                        , optEmails = [];
//
//                    optNumbers.forEach(function(i){
//                        var e = (emails[i]) ? emails[i] : emails.pop();
//                        optEmails.push(e)
//                    })
//                    async.series(merchAPIHelper.populateMakeOptFunctions(accountId, listId, optEmails), function(err, results){
//                        merchAPIHelper.exportList(accountId, listId, function(http_code, response) {
//                            res.render('index', { list: listName });
//                        })
//                    })
//                })
//            }
//        )
//    });
})

//var merchAPIHelper = {
//    emails : []
//    , populateMakeOptFunctions : function(accountId, listId, emails){
//        var opts = []
//        emails.forEach(function(email){
//            opts.push(function(cb){
//                api.post('/lists/optout/' + accountId + '/' + listId
//                    , JSON.stringify({'Email' : email})
//                    , function(http_code, response){
//                        cb(null, {http_code : http_code, response : response})
//                    }
//                )
//            })
//        })
//        return opts;
//    }
//    , populateListFunstions : function(accountId, listId){
//        var  recipients = []
//            , self = this;
//        for(i = 0; i <= 9; i++) {
//            recipients.push(function(cb){
//                data = _.extend({}, {
//                    "Email": casual.email,
//                    "EmailFormatPreference": "Html",
//                    "OptOut": false,
//                    "Properties": [
//                        {
//                            "Name": "FullName",
//                            "Value": casual.full_name
//                        }
//                        , {
//                            'Name' : 'Phone',
//                            'Value' : casual.phone
//                        }
//                    ]
//                })
//                self.saveEmails(data.Email)
//                api.post('/lists/recipients/' + accountId + '/' + listId
//                    , JSON.stringify(data)
//                    , function(http_code, response){
//                        cb(null, {http_code : http_code, response : response})
//                    }
//                )
//            });
//        }
//        return recipients;
//    }
//    , exportList : function(accountId, listId, cb) {
//        data = {
//            "ExportOptions": {
//                "Format": "CharacterSeperated",
//                "HeaderRow": false,
//                "CharacterSeperatedData": {
//                    "Delimiter": "Comma"
//                },
//                "FieldMapping": [
//                    {
//                        "DestinationFieldName": "Email",
//                        "SourceFieldPosition": 0,
//                        "SourceFieldName": "Email"
//                    },{
//                        "DestinationFieldName": "FullName",
//                        "SourceFieldPosition": 1,
//                        "SourceFieldName": "FullName"
//                    },{
//                        "DestinationFieldName": "Phone",
//                        "SourceFieldPosition": 2,
//                        "SourceFieldName": "Phone"
//                    }
//                ]
//            }
//        }
//        api.post('/lists/export/' + accountId + '/' + listId
//            , JSON.stringify(data)
//            , function(http_code, response){
//                cb(http_code, response)
//            }
//        )
//    }
//    , saveEmails : function(email) {
//        this.emails.push(email)
//    }
//    , getEmails : function() {
//        return this.emails;
//    }
//}


module.exports = router;
