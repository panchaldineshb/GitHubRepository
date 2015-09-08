sessionserviceapp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, numberCtrl) {
            numberCtrl.$parsers.push(function (inputValue) {
                if (inputValue === undefined)
                    return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    numberCtrl.$setViewValue(transformedInput);
                    numberCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});
sessionserviceapp.directive('sessions', function () {
    return {
        restrict: 'E',
        templateUrl: 'Partials/sessions.html'
    };
});
sessionserviceapp.directive('manage', function () {
    return {
        restrict: 'E',
        templateUrl: 'Partials/managemodel.html'
    };
});
sessionserviceapp.directive('setting', function () {
    return {
        restrict: 'E',
        templateUrl: 'Partials/settingmodel.html'
    };
});
sessionserviceapp.directive('sessionForm', function () {
    return {
        restrict: 'E',
        templateUrl: 'Partials/addnew.html'
    };
});
