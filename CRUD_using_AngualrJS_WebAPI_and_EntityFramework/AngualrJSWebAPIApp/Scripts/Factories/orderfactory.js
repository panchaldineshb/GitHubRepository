
app.factory('orderFactory', ['$http', function($http) {

	var urlBase = 'http://localhost:8888/orders';
    var orderFactory = {};

    orderFactory.getOrders = function () {
        return $http.get(urlBase);
    };

    orderFactory.getOrder = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    orderFactory.insertOrder = function (ord) {
        return $http.post(urlBase, ord);
    };

    orderFactory.updateOrder = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    orderFactory.deleteOrder = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return orderFactory;

}]);
