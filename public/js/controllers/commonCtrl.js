'use strict';

/* Controllers */

var app = angular.module('controllers', []);

app.controller('commonCtrl', ['$scope', '$rootScope', 'Server', '$modal', '$timeout', '$location', "md5",

    function ($scope, $rootScope, Server, $modal, $timeout, $location, md5) {
        $scope.accountID = ""
        $scope.password = ""
        $scope.username = "n"
        $scope.phone = ""
        $scope.showDetails = true
        $scope.showLogin = true
        $scope.isError = false
        $scope.errorMessage = ""
        $scope.showMain = true

        $scope.heading = 'Login'

//        $scope.showLogin = function () {
//            var modalInstance = $modal.open({
//                templateUrl: '/modal/loginForm.html',
//                controller: ModalLoginCtrl,
//                resolve: {
//                    Server: Server
//                }
//            });
//
//            modalInstance.result.then(function (res) {
//
//            });
//        }


//        $scope.showLogin();
        $scope.changeUsername = function(name){
            $scope.username = name
        }
        $scope.changeAccount = function(account){
            $scope.accountID = account
        }
        $scope.changePassword = function(password){
            $scope.password = password
        }
        $scope.changePhone = function(phone){
            $scope.phone = phone
        }
        $scope.ok = function (formLogin) {
            if(formLogin.$valid){

                Server.post('http://localhost:3000/reachmail/', function (err, response) {
                    if (response.success) {
                        console.log('success')
                        Server.post('http://localhost:3000/twilio/', function (err, response) {
                            var result = ""
                            console.log('response = ', response)

                            switch (response.status) {
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

                            }
                            Server.post('/db', function (err, res) {
                                console.log('after db', err, res);
                                if(!err && !res.success){
                                    $scope.errorMessage = 'Writing data to database is failed'
                                    $scope.isError = true
                                    $timeout(function() {
                                        $scope.isError = false
                                    },5000);
//                                    $modalInstance.close({accountID:$scope.accountID, username:$scope.username, password: $scope.password, phone: $scope.phone});
                                }
                                else if(res.success){
//                                    Server.get('/success', function(err, res){
//
//                                    })
//                                    $location.path("/success")
                                    $scope.showMain = false
                                }

                            }, {username: response.username, accountID: response.accountID, password: md5.createHash(response.password), phone: response.phone, status: result}, null)
                        }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)

                    }
                    else
                    {
                        $scope.errorMessage = 'Your account key, username or password is invalid'
                        $scope.isError = true
                        $timeout(function() {
                            $scope.isError = false
                        },5000);

                    }
                }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)


            }
        };
//        $scope.$on('$routeUpdate', function () {
//            console.log('hey i have changed');
//
//        });
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

