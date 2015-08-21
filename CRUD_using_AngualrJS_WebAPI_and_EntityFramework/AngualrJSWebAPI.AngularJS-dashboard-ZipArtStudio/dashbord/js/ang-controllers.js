// JavaScript Document
// create the controller and inject Angular's $scope
	dashboardApp.controller('mainController', function($scope, $http) {
		// create a message to display in our view
		$scope.message = 'This is my anguler dashboard!';
		$http.get('json/home-figers.json')
       .then(function(res){
          $scope.topvalues = res.data;
		  //alert($scope.todos);                
        });
	});
	
	
	
	dashboardApp.controller('ChartController', function($scope, $http) {
		$scope.message = 'Charts with flot';
  $scope.data = [];
  
  $http.get('json/data.json').success(function(data) {
    $scope.data = data;
	
  });
});


dashboardApp.directive('chart', function() {
  return {
    restrict: 'E',
	
    scope: {
      data: '='
    },
	 
    link: function(scope, elem, attrs) {
		var options = {legend: {  
                show: true,  
                margin: 10,  
                backgroundOpacity: 0.5  
            },  
            points: {  
                show: false,  
                radius: 3  
            }, 
			grid: {
    borderWidth: {top: 0, right: 0, bottom: 1, left: 1},
    borderColor: {top: "#FFF", left: "#ccc", bottom: "#ccc"},
	hoverable: true
},

xaxis: {

                            axisLabelUseCanvas: true,
                            labelAngle: -90,
  tickLength: 0,
  axisLabel: 'Values x axis',
    axisLabelUseCanvas: true,
    axisLabelFontSizePixels: 11,
    axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    axisLabelPadding: 10,
},
yaxis: {
   
    axisLabel: 'Values y axis',
    axisLabelUseCanvas: true,
    axisLabelFontSizePixels: 11,
    axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    axisLabelPadding: 10,
	axisLabelColor:"#ccc"
},
			bars: { show: true, fill: 1, fillColor: "#757dad", align:"center",barWidth: 0.05,lineWidth: 0 }, 
			 color: {color:"#454d7d"}
			}
			
      scope.$watch('data', function() {
        if (scope.data.length > 0) {
          $.plot(elem, scope.data,options, {});
          elem.show();
        }
      })
    }
  };
});



dashboardApp.directive('chartk', function() {
  return {
    restrict: 'E',
	
    scope: {
      data: '='
    },
	 
    link: function(scope, elem, attrs) {
		var options = {legend: {  
                show: true,  
                margin: 10,  
                backgroundOpacity: 0.5  
            },  
            points: {  
                show: false,  
                radius: 3  
            }, 
			grid: {
    borderWidth: {top: 0, right: 0, bottom: 1, left: 1},
    borderColor: {top: "#FFF", left: "#ccc", bottom: "#ccc"},
	hoverable: true
},

xaxis: {

                            axisLabelUseCanvas: true,
                            labelAngle: -90,
  tickLength: 0,
  axisLabel: 'Values x axis',
    axisLabelUseCanvas: true,
    axisLabelFontSizePixels: 11,
    axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    axisLabelPadding: 10,
},
yaxis: {
   
    axisLabel: 'Values y axis',
    axisLabelUseCanvas: true,
    axisLabelFontSizePixels: 11,
    axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    axisLabelPadding: 10,
	axisLabelColor:"#ccc"
},
			bars: { show: true, fill: 1, fillColor: "#757dad", align:"center",barWidth: 0.2,lineWidth: 0 }, 
			 color: {color:"#454d7d"}
			}
      scope.$watch('data', function() {
        if (scope.data.length > 0) {
          $.plot(elem, scope.data,options, {});
          elem.show();
        }
      })
    }
  };
});

dashboardApp.directive('charts', function() {
  return {
    restrict: 'E',
	
    scope: {
      data: '='
    },
	 
    link: function(scope, elem, attrs) {
		var options = {legend: {  
                show: true,  
                margin: 10,  
                backgroundOpacity: 0.5  
            },  
            
            line: {  
                show: true  
            },
			grid: {
    borderWidth: {top: 0, right: 0, bottom: 1, left: 1},
    borderColor: {top: "#FFF", left: "#ccc", bottom: "#ccc"},
	hoverable: true
},

	
	colors:["#454d7d"]		
			
			}
      scope.$watch('data', function() {
        if (scope.data.length > 0) {
          $.plot(elem, scope.data,options, {});
          elem.show();
        }
      })
    }
  };
});

dashboardApp.directive('chartpie', function() {
  return {
    restrict: 'E',
	
    scope: {
      data: '='
    },
	 
    link: function(scope, elem, attrs) {
		var options = {  
            series: {
        pie: {
            show: true
        }
    }}
      scope.$watch('data', function() {
        if (scope.data.length > 0) {
          $.plot(elem, scope.data,options, {});
          elem.show();
        }
      })
    }
  };
});
	
dashboardApp.controller('ModalDemoCtrl', function($scope, $modal) {
  $scope.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};

  // Controller usage example
  //
   var myModal = $modal({template: 'modal.tpl.demo.html', show: false});
   $scope.showModal = function() {
     myModal.$promise.then(myModal.show);
   };
   $scope.hideModal = function() {
     myModal.$promise.then(myModal.hide);
   };

});
	
	
	

	dashboardApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	dashboardApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	
dashboardApp.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
	  
	  $scope.message = 'Users';
	  
	  $scope.showmodel = function () {
        //alert('phone details');
		$('#BuyModal').modal('show');

    }
	
	
	 $scope.confirmOrder = function () {
		$scope.total=$scope.one * $scope.two;
        alert($scope.total);
		$('#BuyModal').modal('hide');

    }
	 
    $http.get('json/users.json').success(function(data) {
      $scope.users = data;
	  // alert(data);
    });

    $scope.orderProp = 'age';
	

	
  }]);

dashboardApp.controller('ApplicationListCtrl', ['$scope', '$http',
  function ($scope, $http) {
	  $scope.message = 'This is my Applications Page dashboard!';
	  $scope.showmodel = function () {
        //alert('phone details');
		$('#BuyModal').modal('show');

    }
	
	
	 $scope.confirmOrder = function () {
		$scope.total=$scope.one * $scope.two;
        alert($scope.total);
		$('#BuyModal').modal('hide');

    }
	 
    $http.get('json/applications.json').success(function(data) {
      $scope.applications = data;
	  // alert(data);
    });

    $scope.orderProp = 'age';
  }]);
  
 dashboardApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
	 
     
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	
    $scope.updateEvent2 = function () {
        alert('delete ' + $scope.phone.imageUrl);
    }
	
	
	
	 alert('yt');
	
	
  }]); 


dashboardApp.controller('homeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  //alert('hi');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
  dashboardApp.controller('componentController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  //alert('hi component');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
   dashboardApp.controller('contactusController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  //alert('hi contact');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
   dashboardApp.controller('chartsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  //alert('hi contact');
    $scope.phoneId = $routeParams.phoneId;
  }]);