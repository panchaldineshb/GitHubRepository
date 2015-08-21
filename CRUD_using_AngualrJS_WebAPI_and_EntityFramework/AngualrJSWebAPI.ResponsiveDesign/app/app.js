'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.main'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/main' });
}]);

myApp.controller('headerMenuCtrl', function ($scope, ToggleShowService, choicePageService) {
    $scope.headerMenuNs = {};

    $scope.headerMenuNs.allMessages = modelData.usersDb.allMessages;

    if ($scope.headerMenuNs.allMessages > 0) {
        ToggleShowService.init('indicators');
    } else {
        $('#indicators').hide();
    }

    $scope.headerMenuNs.choiceMenu = function (page) {
        choicePageService.getPage(page);
    };
});

myApp.controller('navigationCtrl', function ($scope, choicePageService) {
    $scope.navigationNs = {};

    $scope.navigationNs.allMessages = modelData.usersDb.allMessages;
    $scope.navigationNs.allInvites = modelData.usersDb.allInvites;
    $scope.navigationNs.allNews = modelData.usersDb.allNews;
    if ($scope.navigationNs.allMessages > 0) {
        $('.left_bar_navigation ul li:nth-child(1)>span').show();
    } else {
        $('.left_bar_navigation ul li:nth-child(1)>span').hide();
    }
    if ($scope.navigationNs.allInvites > 0) {
        $('.left_bar_navigation ul li:nth-child(2)>span').show();
    } else {
        $('.left_bar_navigation ul li:nth-child(2)>span').hide();
    }
    if ($scope.navigationNs.allNews > 0) {
        $('.left_bar_navigation ul li:nth-child(3)>span').show();
    } else {
        $('.left_bar_navigation ul li:nth-child(3)>span').hide();
    }

    $scope.navigationNs.choiceMenu = function (page) {
        choicePageService.getPage(page);
    };
});

myApp.controller('discSpaceCtrl', function ($scope) {
    $scope.discSpaceNs = {};

    $scope.discSpaceNs.discStatus = modelData.usersDb.discStatus;
    $('.space_download .progress_bar .progress_bar_active').css('width', $scope.discSpaceNs.discStatus.download);
    $('.space_upload .progress_bar .progress_bar_active').css('width', $scope.discSpaceNs.discStatus.upload);
});

myApp.controller('userProfileCtrl', function ($scope) {
    $scope.userProfileNs = {};

    $scope.userProfileNs.userLogin = modelData.usersDb.userLogin;
    $scope.userProfileNs.userSlogan = modelData.usersDb.userSlogan;
    $scope.userProfileNs.userPhoto = modelData.usersDb.userPhoto;
    $scope.userProfileNs.userActivity = modelData.usersDb.userActivity;
});

myApp.controller('calendarCtrl', function ($scope, calendarBlockService) {
    calendarBlockService.init();
});

myApp.service('ToggleShowService', function () {
    this.init = function (elId) {
        setInterval(function () {
            var element = document.getElementById(elId);
            if (element.style.display == "block" || !element.style.display) {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
        }, 500);
    };
});

myApp.service('choicePageService', function ($location) {
    this.getPage = function (link) {
        $location.path(link);
    };
});

myApp.service('calendarBlockService', function () {
    //Announcement of local namespace
    var staticVariables = {};

    //Function receiving the current mark of time
    staticVariables.currentDate = new Date();

    //Function receiving the worked mark of time
    staticVariables.workDate = new Date();

    // Function receiving number of days current month
    staticVariables.getDaysInMonth = function (month) {
        switch (month) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
            case 3:
            case 5:
            case 8:
            case 10:
                return 30;
            case 1:
                return 28;
        }
    };

    //Function obtaining name of the current month
    staticVariables.getNameMonth = function (month) {
        switch (month) {
            case 0:
                return 'ЯНВАРЬ';
            case 1:
                return 'ФЕВРАЛЬ';
            case 2:
                return 'МАРТ';
            case 3:
                return 'АПРЕЛЬ';
            case 4:
                return 'МАЙ';
            case 5:
                return 'ИЮНЬ';
            case 6:
                return 'ИЮЛЬ';
            case 7:
                return 'АВГУСТ';
            case 8:
                return 'СЕНТЯБРЬ';
            case 9:
                return 'ОКТЯБРЬ';
            case 10:
                return 'НОЯБРЬ';
            case 11:
                return 'ДЕКАБРЬ';
        }
    };

    // Function receiving day of the week for the first of the month
    staticVariables.getFirstDay = function (date) {
        var curDate = new Date(date);
        curDate.setDate(1);
        return curDate.getDay();
    };

    //Function Clears Calendar
    staticVariables.clearCalendar = function () {
        var elAllWeeks = document.getElementById('calendar_body_weeks');
        while (elAllWeeks.hasChildNodes()) {
            elAllWeeks.removeChild(elAllWeeks.lastChild);
        }
    };

    // The function change on the next month the calendar
    staticVariables.getNextMonth = function () {
        staticVariables.workDate.setMonth(staticVariables.workDate.getMonth() + 1);
        staticVariables.clearCalendar();
        staticVariables.drawCalendar();
    };

    //The function change on the previous month the calendar
    staticVariables.getPreviousMonth = function () {
        staticVariables.workDate.setMonth(staticVariables.workDate.getMonth() - 1);
        staticVariables.clearCalendar();
        staticVariables.drawCalendar();
    };

    //Installing the handlers navigation calendar months
    staticVariables.setEventNavigation = function () {
        var buttonPrevious = document.getElementById('calendar_month_before');
        var buttonNext = document.getElementById('calendar_month_after');

        buttonPrevious.addEventListener('click', staticVariables.getPreviousMonth);
        buttonNext.addEventListener('click', staticVariables.getNextMonth);
    };

    //Create an array of dates and signs the month
    staticVariables.createDateArr = function (currDate) {
        var resultArr = [];
        var daysInPreviousMonth;

        var firstDayInMonth = staticVariables.getFirstDay(currDate);
        var daysInCurrMonth = staticVariables.getDaysInMonth(currDate.getMonth());

        if (currDate.getMonth() == 0) {
            daysInPreviousMonth = staticVariables.getDaysInMonth(currDate.getMonth() + 11);
        } else {
            daysInPreviousMonth = staticVariables.getDaysInMonth(currDate.getMonth() - 1);
        }

        if (firstDayInMonth == 0)
            firstDayInMonth = 7;
        for (var day = 0; day < daysInCurrMonth; day++) {
            resultArr.push([day + 1, true]);
        }
        if (firstDayInMonth != 1) {
            for (var cnt = 0; cnt < firstDayInMonth - 1; cnt++) {
                resultArr.unshift([daysInPreviousMonth - cnt, false]);
            }
        }
        if (resultArr.length % 7 != 0) {
            var allDaysNextMonth = resultArr.length;
            for (var endCnt = 0; endCnt < (7 - (allDaysNextMonth % 7)) ; endCnt++) {
                resultArr.push([endCnt + 1, false]);
            }
        }
        return resultArr;
    };

    //Function draw calendar
    staticVariables.drawCalendar = function () {
        var curMonth = staticVariables.getNameMonth(staticVariables.workDate.getMonth()) + ' ' + staticVariables.workDate.getFullYear();
        var elCurMonth = document.getElementById('calendar_month');
        elCurMonth.innerHTML = curMonth;

        var dateArr = staticVariables.createDateArr(staticVariables.workDate);

        var dateArrCnt = 0;

        var elAllWeeks = document.getElementById('calendar_body_weeks');
        var dayWeek = staticVariables.getFirstDay(staticVariables.workDate);
        for (var week = 1 ; week <= 6; week++) {
            var elWeek = document.createElement('div');
            elWeek.setAttribute('class', 'calendar_body_week');
            for (var day = 1; day <= 7; day++) {
                var elDay = document.createElement('span');
                elDay.setAttribute('class', 'calendar_day');
                if (dateArr[dateArrCnt][1] == false) {
                    elDay.setAttribute('class', 'calendar_day calendar_any_mounth');
                }
                if (dateArr[dateArrCnt][1] == true && dateArr[dateArrCnt][0] == staticVariables.currentDate.getDate()
                    && staticVariables.currentDate.getMonth() == staticVariables.workDate.getMonth()) {
                    elDay.setAttribute('class', 'calendar_day calendar_today');
                }
                var text = document.createTextNode(dateArr[dateArrCnt][0]);
                dateArrCnt++;
                elDay.appendChild(text);
                elWeek.appendChild(elDay);
            }
            elAllWeeks.appendChild(elWeek);
        }
    };

    // //Local method of initialization and drawing of calendar block
    this.init = function () {
        staticVariables.drawCalendar();
        staticVariables.setEventNavigation();
    };
});