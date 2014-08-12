'use strict';

/* Controllers */

var app = angular.module('controllers', []);

app.controller('commonCtrl', ['$scope', '$rootScope', 'Server',

    function ($scope, $rootScope, Server) {
        $scope.login =""
        $scope.password = ""
        $scope.accountKey = ""
        $scope.phone = ""


        $scope.checkAccount = function()
        {

            Server.get('https://api.sendhub.com/v1/contacts/', function(err, response){
//                if (http_code == 200)
                    console.log('response = ', response)
            },{username:window.username, APIKEY:window.APIKEY})
        }
    }
]);

