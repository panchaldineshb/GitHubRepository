/* global sessionserviceapp, config, angular */
var url = "http://" + gUrl + "/settings/";
sessionserviceapp.controller('settingCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.updateSettings = function (Selected) {
            $scope.dataLoading = true;
            $http.put(url + Selected.id,
                    {settingkey: Selected.settingkey, settingvalue: Selected.settingvalue}, config).success(function (data) {
                $scope.dataLoading = false;
                $("#settingModel").modal('hide');
            }).error(function (data) {
                console.log("gick inte");

            });
        };
        $scope.getSettings = function () {
            $http.get(url, config)
                    .success(function (data) {
                        $scope.settingsObj = data;
                        angular.forEach($scope.settingsObj, function (settings) {
                            $scope.settings = settings;
                            
                        });
                        $scope.Selected = $scope.settings[0];
                    }).error(function () {
                console.log("gick inte hämta");
            });
        };
        $scope.getSettings();
    }]);

sessionserviceapp.controller('ManageSessionCtrl', ['$http', '$scope', function ($http, $scope) {
        $scope.numberDays = '';
        $scope.numberHours = '';
        $scope.validateSessionByHours = function (values) {
            $scope.dataLoading = true;
            $http.post(url + "hour/" + values.hours,
                    {}, config).success(function (data) {
                $scope.dataLoading = false;
                $scope.getAllSessions();
                $("#manageModel").modal('hide');
                values.days = '';
                values.hours = '';
            }).error(function () {
                console.log("gick inte");

            });
        };
        $scope.deleteSessionByDays = function (values) {
            $scope.dataLoading = true;
            $http.post(url + "days/" + values.days,
                    {}, config).success(function (data) {
                $scope.dataLoading = false;
                $scope.getAllSessions();
                $("#manageModel").modal('hide');
                values.days = '';
                values.hours = '';
            }).error(function () {
                console.log("gick inte");

            });
        };
    }]);