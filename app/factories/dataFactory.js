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

	return{getByDepartment};

});

