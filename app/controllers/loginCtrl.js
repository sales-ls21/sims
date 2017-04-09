"use strict";

app.controller("loginCtrl", function($scope, $location, authFactory){

	$scope.user = {
		name: "",
		email:"",
		password: ""
	};
	
	$scope.login = ()=>{
		authFactory.loginUser($scope.user).then((obj)=>{
			$location.url("/dashboard");
			$scope.$apply();
		});
	};


});