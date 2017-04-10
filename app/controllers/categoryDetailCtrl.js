"use strict";

app.controller("categoryDetailCtrl", function($scope, $location, dataFactory, $routeParams, authFactory){


	$scope.details = [];
	$scope.count = null;

	dataFactory.getCategoryDetails($routeParams.category)
	.then((obj)=>{
		$scope.details = obj.data;
		$scope.count = $scope.details.length;
		console.log($scope.details);
		$scope.$apply();
	});
	
});