// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastController'
    })

});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {

}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {

}]);
