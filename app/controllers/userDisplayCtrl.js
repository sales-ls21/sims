"use strict";

app.controller("userDisplayCtrl", function(authFactory, $scope, $location, dataFactory){

	$scope.users = [];
	$scope.categories = [];

	dataFactory.getUsers()
	.then((obj)=>{
		$scope.users = obj.data;
		$scope.$apply();
	});
	
	$scope.logout=()=>{
		authFactory.logoutUser();
		$location.url("/");
		$scope.$apply();
	};
});