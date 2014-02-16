'use strict';
/*Application*/
var app = angular.module('app', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngDragDrop',
    'app.controllers',
    'app.directives',
    'app.services'
]);

var state = [];

app.config(['$urlRouterProvider', '$stateProvider',
    function appRouter($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/areas/home/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/areas/about/about.html'
            })
            .state('about.page1', {
                url: '/page1',
                templateUrl: 'views/areas/about/about.page1.html'
            })
            .state('about.page2', {
                url: '/page2',
                templateUrl: 'views/areas/about/about.page2.html'
            })
            .state('about.page3', {
                url: '/page3',
                templateUrl: 'views/areas/about/about.page3.html'
            })
            .state('about.page4', {
                url: '/page4',
                templateUrl: 'views/areas/about/about.page4.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/areas/contact/contact.html'
            })
            .state('sandbox', {
                url: '/sandbox',
                templateUrl: 'views/areas/sandbox/sandbox.html'
            })
            .state('sandbox.directives', {
                url: '/directives',
                templateUrl: 'views/areas/sandbox/sandbox.directives.html'
            })
            .state('sandbox.data', {
                url: '/data-and-services',
                templateUrl: 'views/areas/sandbox/sandbox.data.html'
            })
            .state('sandbox.crud', {
                url: '/CRUD',
                templateUrl: 'views/areas/sandbox/sandbox.crud.html'
            })
            .state('sandbox.interactions', {
                url: '/interactions',
                templateUrl: 'views/areas/sandbox/sandbox.interactions.html'
            });
    }]);
app.run(function ($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        console.log('Hello');
    });
});