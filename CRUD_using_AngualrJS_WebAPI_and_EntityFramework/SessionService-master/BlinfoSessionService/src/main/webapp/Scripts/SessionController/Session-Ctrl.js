/* global sessionserviceapp, angular, moment */

var config = {headers: {
        'Authorization': 'Basic YmxpbmZvOnBhc3N3b3Jk'
    }
};
var api = "http://"+gUrl+"/sessions/";
sessionserviceapp.controller('sessionCtrl', ['$scope', '$http', '$route',
    function ($scope, $http, $route) {
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.getAllSessions = function () {
            $http.get(api, config).success(function (data) {
                $scope.sessionsObject = data;
                angular.forEach($scope.sessionsObject, function (sessionsList) {
                    $scope.sessions = sessionsList;
                    angular.forEach($scope.sessions, function (sessionArray) {
                        $scope.getValidation(sessionArray);
                    });
                });

            });
        };
        $scope.getValidation = function (session) {
            $http.get(api + "isvalid/" + session.id, config).success(function (data) {
                session.isvalid = data;
            });
        };
        $scope.cancelUpdate = function (session){
            session.state = '';
        };
        $scope.getReadyForEdit = function (session) {
            session.state = 'editing';
            $scope.modelHeader = "Updatera Session";
            $scope.btnText = "Update";
            $scope.diableUserName = true;
            $http.get(api + session.id, config).success(function (data) {
                $scope.getSession = data;
            });
        };
        $scope.addNewSession = function () {
            $scope.getSession = '';
            $("#newSessionModel").modal('show');
            $scope.btnText = "Save";
            $scope.diableUserName = false;
            $scope.modelHeader = "Skapa ny Session";
            if($scope.sessions){
            var i;
            for (i = 0; i < $scope.sessions.length; i++) {
                if (angular.equals($scope.sessions[i].username, $scope.getSession.username)) {
                    $scope.status = $scope.sessions[i].isactive;
                }
                ;
            }
            ;
            }
        };
        $scope.createNewSession = function (session) {
            $http.post(api, {firstname: session.firstname, lastname: session.lastname, username: session.username,
                email: session.email, isactive: $scope.status, department: session.department, expiredate: session.expiredate}, config).success(function (data) {
                $("#newSessionModel").modal('hide');
                $scope.getSession = '';
                $http.get(api + data.id, config).success(function (data) {
                    $scope.getValidation(data);
                    $scope.sessions.push(data);
                });
            });
        };
        $scope.update = function (session) {
            $scope.lifetime = moment($('#LifeTimePicker').val()).format('YYYY-MM-DDThh:mm:ss');
            console.log($scope.lifetime);
            $http.put(api + session.id, {id: session.id, firstname: session.firstname,
                lastname: session.lastname, username: session.username,
                email: session.email, isactive: $scope.status,
                department: session.department, expiredate: $scope.lifetime}, config).success(function (data) {
                $route.reload();
                session = data;
                console.log(session);
            }).error(function () {

            });
        };
        $scope.manageOneAtTime = function (session) {
            $http.put(api + session.id + "/" + session.isvalid,
                    {}, config).success(function (data) {
                $http.get(api + session.id, config).success(function (data) {
                    $scope.session = data;
                });
                $scope.getValidation(session);
            }).error(function (data) {
                console.log(data);
            });
        };
        $scope.manage = function (status) {
            $http.put(api + "manage/" + status, {}, config).success(function (data) {
                $scope.getAllSessions();
            });
        };
        $scope.delete = function (session) {
            var index = $scope.sessions.indexOf(session);
            if (index !== -1) {
                $scope.sessions.splice(index, 1);
                $http.delete(api + session.id, config).success(function (){
                });
                
            }
        };
        $scope.setClass = function (session) {
            if (session.isvalid === true)
                return "enable";
            else if (session.isvalid === false)
                return "disable";
        };
    }]);
