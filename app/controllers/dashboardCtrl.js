"use strict";

app.controller("dashboardCtrl", function($scope, $location, dataFactory){

	$scope.department = [];
	$scope.categories = [];
	$scope.livingroom = [];
	$scope.diningroom = [];
	$scope.bedroom = [];
	$scope.office = [];



	dataFactory.getByDepartment("furniture")
		.then((obj)=>{
			let data = obj.data;
			Object.values(data).forEach(function(key){
				$scope.categories.push(key.category);
				$scope.categories = [...new Set($scope.categories)];
				if(key.category === "living room"){
					$scope.livingroom.push(key);
				}else if(key.category === "dining room"){
					$scope.diningroom.push(key);
				}else if(key.category === "bedroom"){
					$scope.bedroom.push(key);
				}else if(key.category === "office"){
					$scope.office.push(key);
				}
			});
			console.log($scope.categories);
			console.log($scope.livingroom);
			console.log($scope.diningroom);
			console.log($scope.bedroom);
			console.log($scope.office);
			

		});

	
});
