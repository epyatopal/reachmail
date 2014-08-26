'use strict';

/* App Module */

var app = angular.module('myApp', [
    'ui.bootstrap',
    'ngRoute',
    'controllers',
    'services'

]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

