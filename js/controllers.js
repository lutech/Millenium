'use strict';
/* Controllers */
var modules = angular.module("app.controllers", []);

var menuItems = []

modules.controller('navController', ['$scope', '$location', '$state',
    function ($scope, $location, $state) {

        $scope.$state = $state;

        $scope.menuItems = [
            {
                name: 'Home',
                url: 'home'
            },
            {
                name: 'About',
                url: 'about'
            },
            {
                name: 'Contact',
                url: 'contact'
            },
            {
                name: 'Sandbox',
                url: 'sandbox'
            }
        ]

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])
modules.controller('productsController', ['$scope', 'Products', 'ProductCollections',
    function ($scope, Products, ProductCollections) {

        $scope.products = Products.query();

        $scope.saveProduct = function () {
            Products.save($scope.product, function(){
                //reset form here.

                console.log('Saved')
            });
        };


        /*$scope.dropSuccessHandler = function ($event, index, array) {
         array.splice(index, 1);
         };*/
        /*$scope.onDrop = function ($event, $data, array) {
         array.push($data);
         };*/
    }])

modules.controller('productCollectionsController', ['$scope', 'Products', 'ProductCollections',
    function ($scope, Products, ProductCollections) {
        $scope.products = Products.query();


        $scope.productCollections = ProductCollections.query();

        $scope.isStarable = true;

        /*$scope.dropSuccessHandler = function($event,index,array){
         array.splice(index,1);
         };*/


        $scope.onDrop = function ($event, $data, array) {
            array.push($data);
            /*$scope.saveToCollection = function (index) {
             $scope.products.product.save(index, 1)
             };*/
        };

        $scope.starIt = function ($data, array) {
            array.push($data);

            /*$scope.saveToCollection = function (index) {
             $scope.products.product.save(index, 1)
             };*/
        };

    }])