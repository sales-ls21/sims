"use strict";

app.factory("dataFactory", function($http, FBInfo){

	// functions related to inventory
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

	let addProduct = (item)=>{
		return new Promise ((resolve, reject)=>{
			$http.post(`${FBInfo.databaseURL}/inventory.json`, angular.toJson(item))
			.then((obj)=>{
				console.log(obj);
				resolve(obj);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	let updateProduct = (productObj, SKU)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/inventory.json?orderBy="SKU"&equalTo="${SKU}"`)
			.then((obj)=>{
				obj.primaryKey = Object.keys(obj.data);
				let id = obj.primaryKey[0];
				let database = firebase.database();
				database.ref('inventory/' + id).set(productObj)
				.then((obj)=>{
					resolve(obj);
				}).catch((error)=>{
					reject(error);
				});
			});
		});	
	};


	let getProductDetails = (product)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/inventory.json?orderBy="SKU"&equalTo="${product}"`)
			.then((obj)=>{
				resolve(obj);
			}).catch((error)=>{
				reject(error);
			});
		});
	};

	// functions related to users

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



	return{updateProduct, getProductDetails, addProduct, getByDepartment, getUsers, getUserById, updateUser};

});

