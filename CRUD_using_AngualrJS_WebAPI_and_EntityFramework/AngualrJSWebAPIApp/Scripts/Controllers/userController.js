'use strict';

//controller
SarabiAngularApp.controller('userController', function ($scope, userFactory) {
    $scope.tagLine = 'Likeastore. Analytics';

    getUsers();

    function getUsers() {
        userFactory.getUsers(function (results) {
            $scope.userData = results;
        })
    }

    $scope.setScope = function (obj, action) {
        $scope.action = action;
        $scope.New = obj;
    }

    $scope.gridOptions = {
        data: 'userData',
        multiSelect: false,
        showGroupPanel: true,
        showColumnMenu: true,
        enableFiltering: true,
        columnDefs: [{ field: 'Name', displayName: 'Name', width: '20%', cellTemplate: '<div>{{row.entity.Name}}</div>'},
            { field: 'City', displayName: 'City', width: '15%' },
            { field: 'Address', displayName: 'Address', width: '15%' },
            { field: 'ContactNo', displayName: 'Contact No', width: '10%' },
            { field: 'EmailId', displayName: 'Email Id', width: '10%' },
            { displayName: 'Options', cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit" class="btn btn-large btn-warning" value="Edit">&nbsp;<input type="button" ng-click="DeleteUser(row.entity.id)" name="delete" class="btn btn-large btn-danger" value="Delete">', width: '30%' }
        ]
    };

    $scope.update = function () {
        if ($scope.action == 'edit') {
            userFactory.updateUser(function () {
                $scope.status = 'user updated successfully';
                alert('user updated successfully');
                getUsers();
            }, $scope.New)
            $scope.action = '';
        }
        else {
            userFactory.insertUser(function () {
                alert('user inserted successfully');
                getUsers();
            }, $scope.New)
        }
    }

    $scope.DeleteUser = function (id) {
        userFactory.deleteUser(function () {
            alert('User deleted');
            getUsers();
        }, id)
    }
});