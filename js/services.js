'use strict';
/* Services */
var modules = angular.module('app.services', ['ngResource']);

modules.factory('Products', function($resource){
    return $resource('js/data/products.json', {}, {'query': {method: 'GET', isArray: true}});
});
modules.factory('ProductCollections', function($resource){
    return $resource('js/data/productcollections.json');
});