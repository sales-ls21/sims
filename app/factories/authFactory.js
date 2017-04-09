"use strict";

app.factory("authFactory", function($http, FBInfo) {
	let currentUser;

	let loginUser = function(userObj){
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
	};	
	let createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let logoutUser = function(){
		firebase.auth().signOut();
	};

	let isAuthenticated = function(){
		return new Promise((resolve, reject) =>{
			firebase.auth().onAuthStateChanged((user)=>{
				if (user){
					console.log("who is it?", user.uid);
					currentUser = user.uid;
					resolve(true);
				} else{
					console.log("not logged in");
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};

	let storeNewUser = function(userObj){
		return new Promise((resolve, reject)=>{
			$http.post(`${FBInfo.databaseURL}/users.json`, angular.toJson(userObj));
			resolve();
		});
	};

	return {storeNewUser, createUser, logoutUser, loginUser, isAuthenticated, getUser};
});