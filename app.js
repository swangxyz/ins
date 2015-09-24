angular.module('Ins', ['ngRoute', 'ngMessages']).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup', {
      templateUrl: 'view/signup.html',
      controller: 'SignupCtrl'
    })
    .when('/photo/:id', {
      templateUrl: 'view/detail.html',
      controller: 'DetailCtrl'
    })
    .otherwise('/');
});
