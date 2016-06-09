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

//SERVICES
weatherApp.service('cityService', function () {

  this.city = "New York, NY";

});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function () {
    cityService.name = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

  $scope.city = cityService.city;

}]);
