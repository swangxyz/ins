angular.module('Ins', ['ngRoute', 'ngMessages', 'satellizer', 'environment'])
    .config(function($routeProvider, envServiceProvider, $authProvider) {
        envServiceProvider.config({
            domains: {
                development: ['localhost:8080', 'dev.local'],
                production: ['', '', '']
                    // anotherStage: []
            },
            vars: {
                development: {
                    serverUrl: '//localhost:8080',
                    apiUrl: '//localhost/api',
                    staticUrl: '//localhost/static'
                        // anotherCustomVar: ''
                },
                production: {
                    serverUrl: '//localhost:8080',
                    apiUrl: '//',
                    staticUrl: '//'
                        // anotherCustomVar: ''
                }
            }
        });

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

        envServiceProvider.set('development');
        //envService.set('production');
        $serverUrl = envServiceProvider.read('serverUrl')

        $authProvider.loginUrl = $serverUrl + '/auth/login';
        $authProvider.signupUrl = $serverUrl + 'auth/signup';
        $authProvider.oauth2({
            name: 'interest',
            url: 'http://localhost:8080/auth/instagram',
            redirectUri: 'http://localhost:3000',
            requiredUrlParams: ['scope'],
            scope: ['likes'],
            scopeDelimiter: '+',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
        });


    });
