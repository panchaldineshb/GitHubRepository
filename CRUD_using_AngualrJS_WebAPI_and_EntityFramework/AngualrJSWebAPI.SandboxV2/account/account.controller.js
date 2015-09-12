'use strict';

/* Examples

This example is where Login logic was picked-up from:
http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx

AngularJS Project Structure

I've based a lot of the project and code structure on recommendations from John Papa's style guide with my own tweaks here and there, for example I've placed application config and routes within the app.js file rather than separate files because there isn't much code in either section, these could be split out later if the sections grow.

I'm also trying out placing application services and content in folders prefixed with 'app-' to prevent having a name clash if I need to add a section to my app called 'services' or 'content', it also has the added benefit of grouping all the 'non-gui' code together at the top of the folders.

http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
Here's what the project structure looks like: (click above link to get more details)
ROOT
    app-content
        app.css
    app-services
        authentication.service.js
        flash.service.js
        user.service.js
        user.service.local-storage.js
    home
        home.controller.js
        home.view.html
    login
        login.controller.js
        login.view.html
    register
        register.controller.js
        register.view.html
    app.js
    index.html
 

Another example where structure is defined properly along with good promise objects:

http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx



*/

/* Controllers */

angular
.module('phonecatApp')
.controller('AccountController', ['$scope', '$rootScope', '$location', 'Account',
    function ($scope, $rootScope, $location, Account) {
        // reset login status
        Account.ClearCredentials();

        $scope.logoff = function () {
            Account.ClearCredentials();
            $location.path('/');
        };

        $scope.login = function () {
            $scope.dataLoading = true;
            Account.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    Account.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);