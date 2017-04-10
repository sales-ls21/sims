"use strict";

app.controller("navbarCtrl", function($scope, $location, authFactory){

	$scope.logout = ()=>{
		authFactory.logoutUser();
		$location.url("/");
	};

});