"use strict";

app.controller("userDisplayCtrl", function($scope, $location, dataFactory){

	$scope.users = [];
	$scope.categories = [];

	dataFactory.getUsers()
	.then((obj)=>{
		$scope.users = obj.data;
		$scope.$apply();
	});
	
});