'use strict';

//controller
SarabiAngularApp.controller('organizationController', function ($scope, organizationFactory) {
    $scope.tagLine = 'Likeastore. Analytics';
    $scope.organizationData = [];

    getOrganizations();

    function getOrganizations() {
        organizationFactory.getOrganizations(function (results) {
            $scope.organizationData = results;
        })
    }

    $scope.setScope = function (obj, action) {
        $scope.action = action;
        $scope.New = obj;
    }

    $scope.gridOptions = {
        data: 'organizationData',
        multiSelect: false,
        showGroupPanel: true,
        showColumnMenu: true,
        enableFiltering: true,
        columnDefs: [{ field: 'Name', displayName: 'Name', width: '20%', cellTemplate: '<div>{{row.entity.Name}}</div>' },
            { field: 'City', displayName: 'City', width: '15%' },
            { field: 'Address', displayName: 'Address', width: '15%' },
            { field: 'ContactNo', displayName: 'Contact No', width: '10%' },
            { field: 'EmailId', displayName: 'Email Id', width: '10%' },
            { displayName: 'Options', cellTemplate: '<input type="button" ng-click="setScope(row.entity,\'edit\')" name="edit" class="btn btn-large btn-warning" value="Edit">&nbsp;<input type="button" ng-click="DeleteOrganization(row.entity.Id)" name="delete" class="btn btn-large btn-danger" value="Delete">', width: '30%' }
        ]
    };

    $scope.update = function () {
        if ($scope.action == 'edit') {
            organizationFactory.updateOrganization(function () {
                $scope.status = 'Organization updated successfully';
                getOrganizations();
            }, $scope.New)
            $scope.action = '';
        }
        else {
            organizationFactory.insertOrganization(function () {
                $scope.status = 'Organization inserted successfully';
                getOrganizations();
            }, $scope.New)
        }
    }

    $scope.DeleteOrganization = function (id) {
        organizationFactory.deleteOrganization(function () {
            $scope.status = 'Organization deleted successfully';
            getOrganizations();
        }, id)
    }
});