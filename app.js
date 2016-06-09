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
weatherApp.controller('homeController', ['$scope', 'cityService',
  function($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function () {
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService',
  function($scope, $resource, cityService) {
  var APIKey = ''
  $scope.city = cityService.city;

  $scope.weatherAPI =
    $resource('http://api.openweathermap.org/data/2.5/forecast?appid=' + APIKey,
        { callback: 'JSON_CALLBACK' }, {
          get: {
            method: 'JSONP'
          }
        }
    );

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });

  $scope.convertToFarenheit = function (degK) {
     return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDate = function (dt) {
     return new Date(dt * 1000);
  }

}]);
