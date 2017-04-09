"use strict";

app.controller("dashboardCtrl", function($scope, $location, dataFactory){

	$scope.categories = [];
	$scope.finalCategories = [];
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
				$scope.$apply();
				if(key.category === "living room"){
					$scope.livingroom.push(key);
					$scope.$apply();
				}else if(key.category === "dining room"){
					$scope.diningroom.push(key);
					$scope.$apply();
				}else if(key.category === "bedroom"){
					$scope.bedroom.push(key);
					$scope.$apply();
				}else if(key.category === "office"){
					$scope.office.push(key);
					$scope.$apply();
				}
			});	
			$scope.categories.forEach(function(v){
					$scope.finalCategories.push(v.toUpperCase());
					$scope.$apply();
				});		
	});





	
});
