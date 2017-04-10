"use strict";

app.controller("editCtrl", function(authFactory, $routeParams, $location, $scope, dataFactory){

	$scope.name = $routeParams.employeeId;
	$scope.users = [];


	$scope.editedUser = {
		name: "",
		email: "",
		employeeId: "",
		admin: "",
		department: ""
	};

	dataFactory.getUserById($routeParams.employeeId)
	.then((obj)=>{
		$scope.users = obj.data;
		$scope.$apply();
	});

	$scope.saveEdits = ()=>{
		dataFactory.updateUser($scope.editedUser, $scope.name)
		.then((obj)=>{
			$location.url("/users");
			$scope.$apply();
			toastr.success("User successfully updated!");
		});
	};

	$scope.logout=()=>{
		authFactory.logoutUser();
		$location.url("/");
		$scope.$apply();
	};
});