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
	.otherwise("/");

}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});

app.run( ($location, FBInfo)=>{
	let authConfig = {
		apiKey: FBInfo.apiKey,
		authDomain: FBInfo.authDomain
	};
	firebase.initializeApp(authConfig);
});