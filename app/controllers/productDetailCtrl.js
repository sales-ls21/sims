"use strict";

app.controller("productDetailCtrl", function($scope, $location, $routeParams, dataFactory, authFactory){

	$scope.products = [];

	dataFactory.getProductDetails($routeParams.SKU)
	.then((obj)=>{
		$scope.products = obj.data;
		$scope.$apply();
	});

});