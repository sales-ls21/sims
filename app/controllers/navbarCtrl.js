"use strict";

app.controller("navbarCtrl", function($scope, $location, authFactory){

	$scope.manageAccount = ()=>{
		authFactory.isAuthenticated()
		.then((user)=>{
			if(user){
				let user = authFactory.getUser();
				authFactory.retrieveUserStatus(user)
				.then((obj)=>{
					if(obj.admin === true){
						$location.url("/create-account");
					}else{
						toastr.warning("You must be an admin user to access this area.");	
					}
				});
			}
		});
	};

	$scope.logout = ()=>{
		authFactory.logoutUser();
		$location.url("/");
	};

});