"use strict";

var app = angular.module("SIMS", ["ngRoute"]);

let isAuth = function(authFactory){
	return new Promise ((resolve, reject)=>{
		authFactory.isAuthenticated()
		.then((user)=>{
			if(user){
				resolve();
			} else{
				reject();
			}
		});
	});
};

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/login.html",
		controller: "loginCtrl"
	})
	.when("/create-account", {
		templateUrl: "partials/register.html",
		controller: "registerCtrl"
	})
	.when("/dashboard", {
		templateUrl: "partials/admin-home.html",
		controller: "dashboardCtrl"
	})
	.when("/users",{
		templateUrl: "partials/user-display.html",
		controller: "userDisplayCtrl"
	})
	.when("/add-new-product", {
		templateUrl: "partials/add-product.html",
		controller: "addProductCtrl"
	})
	.when("/:SKU", {
		templateUrl: "partials/product-detail.html",
		controller: "productDetailCtrl"
	})
	.when("/:category", {
		templateUrl: "partials/category-detail.html",
		controller: "categoryDetailCtrl"
	})
	.when("/edit-user/:employeeId", {
		templateUrl: "partials/edit-user.html",
		controller: "editCtrl"
	})
	.when("/edit-product/:SKU", {
		templateUrl: "partials/edit-product.html",
		controller: "editProductCtrl"
	})
	.otherwise("/");

}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});

app.run( ($location, FBInfo)=>{
	let authConfig = {
		apiKey: FBInfo.apiKey,
		authDomain: FBInfo.authDomain,
		databaseURL: FBInfo.databaseURL
	};
	firebase.initializeApp(authConfig);
});