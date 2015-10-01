angular.module('Ins', ['ngRoute', 'ngMessages', 'satellizer', 'environment'])
    .config(function ($routeProvider, envServiceProvider, $authProvider) {
        envServiceProvider.config({
            domains: {
                development: ['localhost:8080', 'dev.local'],
                production: ['stevenw.xyz', 'stevenw.xyz', '']
                
                // anotherStage: []
            },
            vars: {
                development: {
                    serverUrl: 'http://localhost:3000',
                    clientUrl: 'http://localhost:8080',
                    clientId: '58394c6d6aae436392eb7898d80d33ea'
                    // anotherCustomVar: ''
                },
                production: {
                    serverUrl: 'https://ins-server.herokuapp.com',
                    clientUrl: 'http://stevenw.xyz/ins',
                    clientId: '15eaa20c07e24ce289a9ecf8331c1b2a'

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

        //envServiceProvider.set('development');
        envServiceProvider.set('production');
        $serverUrl = envServiceProvider.read('serverUrl');
        $clientUrl = envServiceProvider.read('clientUrl');
        $clientId = envServiceProvider.read('clientId');
        $authProvider.loginUrl = $serverUrl + '/auth/login';
        $authProvider.signupUrl = $serverUrl + '/auth/signup';
        $authProvider.oauth2({
            name: 'interest',
            url: $serverUrl + '/auth/instagram',
            redirectUri: $clientUrl,
            clientId: $clientId,
            requiredUrlParams: ['scope'],
            scope: ['likes'],
            scopeDelimiter: '+',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
        });
    }).run(function ($rootScope, $window, $auth) {
        if ($auth.isAuthenticated() && $window.localStorage.currentUser) {
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        } else {
            $rootScope.currentUser = null;
        }
    });
