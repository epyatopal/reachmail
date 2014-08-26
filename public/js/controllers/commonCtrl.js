'use strict';

/* Controllers */

var app = angular.module('controllers', []);

app.controller('commonCtrl', ['$scope', '$rootScope', 'Server', '$modal',

    function ($scope, $rootScope, Server, $modal) {
        $scope.login = ""
        $scope.password = ""
        $scope.accountKey = ""
        $scope.phone = ""

        $scope.showLogin = function(){
            var modalInstance = $modal.open({
                templateUrl: '/modal/loginForm.html',
                controller: ModalLoginCtrl
//                ,
//                size: 'md'
            });

            modalInstance.result.then(function (res) {
                Server.post('http://localhost:3000/twilio/', function (err, response) {
                    var result = ""

                    switch(response.status){
                        case "completed":
                        {
                            result = "confirm"
                            break;
                        }
                        case "failed":
                        {
                            result = "invalid number"
                            break;
                        }
                        default:
                        {
                            result = "no answer"
                            break;
                        }
                            //save to db
                    }
                },{username:res.username,accountID:res.accountID,password:res.password,phone:res.phone},null)
            });
        }


        $scope.showLogin();
        $scope.checkAccount = function () {
            $scope.showLogin();
//            Server.post('http://api.phone-validator.net/api/v2/verify', function (err, response) {
//                console.log('response send= ', response)
//            }, {PhoneNumber: '+18477363872', APIKey: 'pv-9a59b53e1f1955f3b3018293469c9ace'})




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

