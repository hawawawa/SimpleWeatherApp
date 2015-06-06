﻿// Declare module that references our controllers.
var weatherApp = angular.module('weatherApp', ['ngRoute', 'weatherControllers']).config(function ($routeProvider) {

    /*
      Inject the AngularJS routing (ngRoute) service so we can 
      access the $routeProvider reference in our routing function.
      Also inject the 'weatherControllers' service which is 
      defined in 'controllers.js'.
     */

    'use strict';

    $routeProvider.when("/home", {
        /* When 'home' route is selected 
           use the 'list.html' template and the 'ListCtrl' controller. */
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    })
    .when("/weather/:name*", {
        templateUrl: function(urlattr){
          return 'views/weather.html';
        },
        controller:  'WeatherCtrl'
        // resolve:
    }).
    // If no route is selected then use the 'home' route.
    otherwise({ redirectTo: '/home' });
});
