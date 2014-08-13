var appServices = angular.module('services', []);

appServices.factory('Server', ['$http', '$rootScope',
    function ($http, $rootScope) {
        var _request = function(url,method, cb, params, data){
            var url = url
                , method = method || 'GET'
                , params = params || null
                , data = data || {};
//            $http.defaults.useXDomain = true;
            $http({url: url, method: method, params: params, data: data
//                    ,headers:{
//                    'Access-Control-Allow-Origin': '*',
//                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
//                },withCredentials: true
            }).success(function (res) {
                    cb(null, res)
                }).error(function (err) {
                    cb(err, null)
                })
        };
        return {
            checkAccount: function(url, cb, data){
                return _request(url,'POST', cb, null, data);
            },

            get: function(url, cb, params){
                return _request(url,'GET', cb,params, null);
            },

            post: function(url, cb, params, data){
                return _request(url,'POST', cb, params, data);
            }
        }
    }]);
