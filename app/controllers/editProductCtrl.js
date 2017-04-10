"use strict";

app.controller("editProductCtrl", function($scope, $location, $routeParams, dataFactory, authFactory){

	$scope.currentUser = null;
	authFactory.isAuthenticated()
	.then((obj)=>{
		$scope.currentUser = authFactory.getUser();
	});

	$scope.products = [];

	dataFactory.getProductDetails($routeParams.SKU)
	.then((obj)=>{
		$scope.products = obj.data;
		$scope.$apply();
	});

	$scope.editedProduct = {
		SKU: "",
		brand: "",
		department: "",
		category: "",
		type: "",
		price: "",
		quantity: "",
		date_updated: new Date().toISOString(),
		location: "",
		description: ""
	};

	$scope.saveEdits = ()=>{
		$scope.editedProduct.updated_by = $scope.currentUser;
		dataFactory.updateProduct($scope.editedProduct, $routeParams.SKU)
		.then((obj)=>{
			$location.url("/dashboard");
			$scope.$apply();		
			toastr.success("Product updated successfully!");
		});
		
	};

	$scope.logout = ()=>{
		authFactory.logoutUser();
		$location.url("/");
	};

});