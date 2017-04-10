"use strict";

app.factory("dataFactory", function($http, FBInfo){

	let getByDepartment = (department)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/inventory.json?orderBy="department"&equalTo="${department}"`)
			.then((obj)=>{
				resolve(obj);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	let getUsers = ()=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/users.json`)
			.then((obj)=>{
				resolve(obj);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	let getUserById = (user)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/users.json?orderBy="employeeId"&equalTo="${user}"`)
			.then((obj)=>{
				resolve(obj);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	let updateUser = (userObj, name)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/users.json?orderBy="employeeId"&equalTo="${name}"`)
			.then((obj)=>{
				obj.primaryKey = Object.keys(obj.data);
				let id = obj.primaryKey[0];
				let database = firebase.database();
				database.ref('users/' + id).set(userObj)
				.then((obj)=>{
					resolve(obj);
				}).catch((error)=>{
					reject(error);
				});
			});
		});	
	};

	return{getByDepartment, getUsers, getUserById, updateUser};

});

