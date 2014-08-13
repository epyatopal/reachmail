'use strict';

/* Controllers */

var app = angular.module('controllers', []);

app.controller('commonCtrl', ['$scope', '$rootScope', 'Server',

    function ($scope, $rootScope, Server) {
        $scope.login = ""
        $scope.password = ""
        $scope.accountKey = ""
        $scope.phone = ""


        $scope.checkAccount = function () {
//            Server.post('http://api.phone-validator.net/api/v2/verify', function (err, response) {
//                console.log('response send= ', response)
//            }, {PhoneNumber: '+18477363872', APIKey: 'pv-9a59b53e1f1955f3b3018293469c9ace'})


             Server.get('http://localhost:3000/twilio/', function (err, response) {

                console.log('response = ', response)
            }, null)

//            Server.post('https://api.plivo.com/v1/Account/MANJBJNWJKYJDJYZU5ZJ/Call/', function (err, response) {
//
//                console.log('response = ', response)
//            },null, {from:'18448432280', to:'79885865058', answer_url:'https://go.reachmail.net'} )

//            Server.get('https://api.sendhub.com/v1/contacts/', function (err, response) {
//                if ($scope.phone.substr(0, 1) != "+") {
//                    $scope.phone = "+".concat($scope.phone)
//                }
//                var currentContact = _.findWhere(response.objects, {number: $scope.phone})
//                if (currentContact) {
//                    Server.post('https://api.sendhub.com/v1/messages/', function (err, response) {
//                        console.log('response send= ', response)
//                    }, {username: window.username, api_key: window.APIKEY}, {contacts: [currentContact.id], text: 'Messaga'})
//                }
//                console.log('response = ', response)
//            }, {username: window.username, api_key: window.APIKEY})
        }
    }
]);

