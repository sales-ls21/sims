"use strict";

app.controller("registerCtrl", function($scope, $location, authFactory){


	$scope.user = {
		name: "",
		email: "",
		password: "",
		department: "",
		employeeId: "",
		admin: false,
		date_created: new Date().toISOString()
	};

	$scope.register= ()=>{
		authFactory.createUser($scope.user)
		.then((user)=>{
			authFactory.storeNewUser($scope.user)
		.then((obj)=>{
			$location.url("/dashboard");
			$scope.$apply();		
			});
		});
	};
	
});