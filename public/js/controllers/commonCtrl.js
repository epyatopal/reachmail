'use strict';

/* Controllers */

var app = angular.module('controllers', []);

app.controller('commonCtrl', ['$scope', '$rootScope', 'Server', '$modal', '$timeout', '$location', "md5",

    function ($scope, $rootScope, Server, $modal, $timeout, $location, md5) {
        $scope.accountID = ""
        $scope.password = ""
        $scope.username = ""
        $scope.phone = ""
        $scope.showDetails = true
        $scope.showLogin = true
        $scope.isError = false
        $scope.errorMessage = ""
        $scope.showMain = true
        $scope.isDisabled = false


        $scope.heading = 'Login'

        $scope.changeUsername = function (name) {
            $scope.username = name
        }
        $scope.changeAccount = function (account) {
            $scope.accountID = account
        }
        $scope.changePassword = function (password) {
            $scope.password = password
        }
        $scope.changePhone = function (phone) {
            $scope.phone = phone
        }
        $scope.ok = function (formLogin) {
            if(formLogin.phone.$valid){



            if (formLogin.$valid) {
                $scope.isDisabled = true
                Server.post(window.host + '/reachmail/', function (err, response) {
                    if (response.success) {

                        Server.post(window.host + '/twilio/', function (err, response) {
                            if (!err) {
                                Server.get(window.host + '/twilio/' + response.sid, function (err, responseCall) {
                                    if (!err) {
                                        var result = ""

                                        switch (responseCall.status) {
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

                                            if (!err && !res.success) {
                                                $scope.errorMessage = 'Writing data to database is failed'
                                                $scope.isError = true
                                                $timeout(function () {
                                                    $scope.isError = false
                                                }, 5000);
                                            }
                                            else if (res.success) {

                                                $scope.showMain = false
                                                $scope.isDisabled = false
                                            }

                                        }, {username: response.username, accountID: response.accountID, password: md5.createHash(response.password), phone: response.phone, status: result, sid: response.sid}, null)
                                    }
                                    else {
                                        $scope.errorMessage = err
                                        $scope.isError = true
                                        $timeout(function () {
                                            $scope.isError = false
                                        }, 5000);
                                    }

                                })

                            }
                            else {
                                $scope.errorMessage = err
                                $scope.isError = true
                                $timeout(function () {
                                    $scope.isError = false
                                }, 5000);
                            }
                        }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)

                    }
                    else {
                        $scope.errorMessage = 'Your account key, username or password is invalid'
                        $scope.isError = true
                        $timeout(function () {
                            $scope.isError = false
                        }, 5000);

                    }
                }, {username: $scope.username, accountID: $scope.accountID, password: $scope.password, phone: $scope.phone}, null)
            }
            }
            else{
                $scope.errorMessage = 'Phone number is invalid'
                $scope.isError = true
                $timeout(function () {
                    $scope.isError = false
                }, 5000);

            }
        };
        $scope.checkAccount = function () {
            $scope.showLogin();
        }


    }
]);

