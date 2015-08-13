'use strict';

/**
 * @ngdoc function
 * @name myAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularAppApp
 */
app.controller('MainCtrl', ['$scope','orderFactory',function ($scope,orderFactory) {

	$scope.getOrders=function(){
		orderFactory.getOrders().success(function(ords){
			console.log("Successfully received orders!");
	    	$scope.orders=ords;
	    }).error(function(error){
	    	console.log("Error happened!\n"+error.message);
	    });
	}

	$scope.deleteOrder=function(idNum){
		orderFactory.deleteOrder(idNum).success(function(ret){
			console.log("Successfully deleted an order!");
			$scope.orders.splice(idNum,1);
	    }).error(function(error){
	    	console.log("Error happened!\n"+error.message);
	    });
	}

	$scope.insertOrder=function(ord){
		orderFactory.insertOrder(ord).success(function(ret){
			console.log("Successfully inserted an order!");
			$scope.orders.push(ord);
	    }).error(function(error){
	    	console.log("Error happened!\n"+error.message);
	    });
	}

	$scope.cancelEvent=function(event){
		console.log("You clicked me!");
		var idNum=parseInt(event.target.id.match(/\d+/)[0]);
		console.log(idNum);
		$scope.deleteOrder(idNum);

	}

	$scope.submitEvent=function(event){
		console.log("You submitted me!\nYour order:");
		console.log($scope.newOrder);
		$scope.insertOrder($scope.newOrder);
	}

    console.log("Hello from MainCtrl!");

    $scope.getOrders();
    setInterval($scope.getOrders,5000);

  }]);
