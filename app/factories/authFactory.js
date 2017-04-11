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
					currentUser = user.uid;
					resolve(currentUser);
				} else{
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


	let isAuth = function(){
		return new Promise((resolve, reject) =>{
			firebase.auth().onAuthStateChanged((user)=>{
				if (user){
					resolve(user.uid);
				} else{
					resolve(false);
				}
			});
		});
	};

	let retrieveUserStatus = (id)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/users.json?orderBy="uid"&equalTo="${id}"`)
			.then((obj)=>{
				resolve(obj.data);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	return {retrieveUserStatus, isAuth, storeNewUser, createUser, logoutUser, loginUser, isAuthenticated, getUser};
});