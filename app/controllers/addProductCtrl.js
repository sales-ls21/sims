"use strict";

app.controller("addProductCtrl", function(authFactory, $scope, $location, dataFactory){
	$scope.currentUser = null;

	authFactory.isAuthenticated()
	.then((obj)=>{
		$scope.currentUser = authFactory.getUser();
		$scope.$apply();
	});


	$scope.product = {
		SKU: "",
		brand: "",
		department: "",
		category: "",
		type: "",
		price: "",
		quantity: "",
		location: "",
		description: "",
		date_created: new Date().toISOString(),
	};

	$scope.save = ()=>{
		$scope.product.created_by = $scope.currentUser;
		dataFactory.addProduct($scope.product)
		.then((obj)=>{
			$location.url("/dashboard");
			$scope.$apply();
		});
	};
});