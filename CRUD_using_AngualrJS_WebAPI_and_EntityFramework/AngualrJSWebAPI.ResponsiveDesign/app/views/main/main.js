'use strict';

var myAppMain = angular.module('myApp.main', ['ngRoute']);

myAppMain.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/main', { templateUrl: 'views/main/main.html', controller: 'mainCtrl' })
        .when('/test', { templateUrl: 'views/test/test.html', controller: 'mainCtrl' })
        .otherwise({
            redirectTo: '/main'
        });
}]);

myAppMain.controller('mainCtrl', function ($scope, CanvasStatisticsService, CanvasGraphicsService) {
    $scope.mainNs = {};

    $scope.mainNs.videos = modelData.usersDb.userVideos[modelData.usersDb.userVideos.length - 1];

    $scope.mainNs.tweees = modelData.usersDb.userTweets;

    $scope.mainNs.osUse = modelData.usersDb.osUse;

    CanvasStatisticsService.initGraphics('stats_draw', $scope.mainNs.osUse.osIOS, $scope.mainNs.osUse.osMac, $scope.mainNs.osUse.osLinux, $scope.mainNs.osUse.osWin, 'JUNE', 2015);

    $scope.mainNs.getStatistics = function (type) {
        for (var cnt in modelData.usersDb.userStatistics) {
            if (modelData.usersDb.userStatistics[cnt].type == type) {
                $scope.mainNs.graphStatistic = modelData.usersDb.userStatistics[cnt];
            } 0
        }

        $scope.mainNs.dataInterval = [];
        for (var i in $scope.mainNs.graphStatistic.intervals) {
            $scope.mainNs.dataInterval.push($scope.mainNs.graphStatistic.intervals[i].title);
        }

        CanvasGraphicsService.initGraphics('draw_graph', $scope.mainNs.graphStatistic.dataPoints, $scope.mainNs.dataInterval);

        switch (type) {
            case 'yearPeriod':
                $scope.mainNs.dataPeriod = 2015;
                break;
            case 'monthPeriod':
                $scope.mainNs.dataPeriod = 'day in last month';
                break;
            case 'weekPeriod':
                $scope.mainNs.dataPeriod = '';
                break;
        }
    };

    $scope.mainNs.getStatistics('yearPeriod');
});

myAppMain.service('CanvasGraphicsService', function () {
    //Announcement of local namespace
    var staticVariables = {};

    staticVariables.initCanvas = function (canvasId, dataPoints, dataMonth) {
        staticVariables.canvas = document.getElementById(canvasId);
        staticVariables.context = staticVariables.canvas.getContext('2d');

        //Array of points on the graphic
        staticVariables.dataPoint = dataPoints;
        staticVariables.dataMounth = dataMonth;
    };

    //Function of change the geometry canvas depending on the device parameters
    staticVariables.testDevice = function () {
        staticVariables.canvas.setAttribute('height', staticVariables.canvas.width);
        staticVariables.canvas.setAttribute('width', staticVariables.canvas.height);
    };

    //Function of drawing the lines axes on the schedule
    staticVariables.drawGraphLine = function (ctx, cnt, color) {
        var startXPosition = staticVariables.canvas.width * 10 / 100;
        var endXPosition = staticVariables.canvas.width * 90 / 100;
        var stepYPosition = staticVariables.canvas.height / (cnt + 1);

        if (!color) {
            ctx.strokeStyle = 'black';
        } else {
            ctx.strokeStyle = color;
        }
        if (!cnt) {
            cnt = 4;
        }
        ctx.beginPath();
        for (var i = 1; i <= cnt; i++) {
            ctx.moveTo(startXPosition, stepYPosition * i);
            ctx.lineTo(endXPosition, stepYPosition * i);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.font = '10px Ubuntu';
        ctx.fillStyle = 'white';

        for (var j = 1; j <= cnt; j++) {
            ctx.fillText((cnt - j) * 10, startXPosition * 0.3, stepYPosition * j);
        }
    };

    //Function of drawing the points lines on the schedule
    staticVariables.drawGraphPoints = function (ctx, dataPoint) {
        var offsetX = staticVariables.canvas.width * 10 / 100;
        var offsetY = staticVariables.canvas.height * 80 / 100;
        var stepX = staticVariables.canvas.width * 80 / 10000;
        var stepY = staticVariables.canvas.height / 50;
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        for (var i in dataPoint) {
            if (i == 0)
                ctx.moveTo(offsetX + dataPoint[i][0] * stepX, offsetY - dataPoint[i][1] * stepY);
            ctx.lineTo(offsetX + dataPoint[i][0] * stepX, offsetY - dataPoint[i][1] * stepY);
        }
        ctx.stroke();
        ctx.closePath();
    };

    //Function of drawing the month axes on the schedule
    staticVariables.drawMounthPoin = function (ctx, dataMounth) {
        var offsetX = staticVariables.canvas.width * 10 / 100;
        var offsetY = staticVariables.canvas.height * 90 / 100;
        var stepX = staticVariables.canvas.width * 80 / ((dataMounth.length - 1) * 100);

        ctx.font = '12px Ubuntu';
        ctx.fillStyle = 'white';

        for (var i in dataMounth) {
            ctx.fillText(dataMounth[i], offsetX + stepX * i, offsetY);
        }
    };

    // Function all drawing on the schedule
    staticVariables.drawGraph = function (dataPoint) {
        staticVariables.drawGraphLine(staticVariables.context, 4, '#009699');
        staticVariables.drawMounthPoin(staticVariables.context, staticVariables.dataMounth);
        staticVariables.drawGraphPoints(staticVariables.context, dataPoint);
    };

    //Local method of initialization and drawing of graphics in the set canvas element
    this.initGraphics = function (canvasId, dataPoints, dataMonth) {
        staticVariables.initCanvas(canvasId, dataPoints, dataMonth);
        staticVariables.testDevice();
        staticVariables.drawGraph(staticVariables.dataPoint);
        window.onresize = function () {
            staticVariables.testDevice();
            staticVariables.drawGraph(staticVariables.dataPoint);
        };
    };
});

myAppMain.service('CanvasStatisticsService', function () {
    //Announcement of local namespace
    var staticVariables = {};

    staticVariables.initCanvas = function (canvasId) {
        staticVariables.canvas = document.getElementById(canvasId);
        staticVariables.context = staticVariables.canvas.getContext('2d');
    };

    //Function of change the geometry canvas depending on the device parameters
    staticVariables.testDevice = function () {
        if (window.getComputedStyle(staticVariables.canvas)['width'].slice(0, 2) < window.getComputedStyle(staticVariables.canvas)['height'].slice(0, 2)) {
            staticVariables.areaParams = staticVariables.canvas.width;
            staticVariables.canvas.setAttribute('height', staticVariables.areaParams);
        } else {
            staticVariables.areaParams = staticVariables.canvas.height;
            staticVariables.canvas.setAttribute('width', staticVariables.areaParams);
        }
    };

    //The function  drawing sectors of the schedule
    staticVariables.drawGraphics = function (data1, data2, data3, data4) {
        var h = 100;
        var radius = [h / 2, h / 2, h / 2, h / 2];
        var radius2 = [h / 3, h / 3, h / 3, h / 3];
        var datalist = [data1 * 360 / 100, data2 * 360 / 100, data3 * 360 / 100, data4 * 360 / 100];
        staticVariables.colist = ['#e64c65', '#11a8ab', '#fcb150', '#4fc4f6'];
        staticVariables.colist2 = ['#394264', '#394264', '#394264', '#394264'];

        staticVariables.circle(staticVariables.context, staticVariables.canvas.width, staticVariables.canvas.height, datalist, radius, staticVariables.colist);
        staticVariables.circle(staticVariables.context, staticVariables.canvas.width, staticVariables.canvas.height, datalist, radius2, staticVariables.colist2)
    };

    staticVariables.circle = function (ctx, w, h, datalist, radius, colist) {
        var centerx = w / 2;
        var centery = h / 2;
        var total = 0;
        for (var x = 0; x < datalist.length; x++) { total += datalist[x]; }
        var lastend = 0;
        var offset = Math.PI / 2;
        for (x = 0; x < datalist.length; x++) {
            var thispart = datalist[x];
            ctx.beginPath();
            ctx.fillStyle = colist[x];
            ctx.strokeStyle = '#394264';
            ctx.moveTo(centerx, centery);
            var arcsector = Math.PI * (2 * thispart / total);
            ctx.arc(centerx, centery, radius[x], lastend - offset, lastend + arcsector - offset, false);
            ctx.lineTo(centerx, centery);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            lastend += arcsector;
        }
    };

    //
    staticVariables.text = function (ctx, text, posx, posy, font, color) {
        if (!color) {
            ctx.fillStyle = "black";
        } else {
            ctx.fillStyle = color;
        }
        if (!font) {
            ctx.font = "14px Arial";
        } else {
            ctx.font = font;
        }
        ctx.fillText(text, posx, posy);
    };

    //
    staticVariables.drawText = function (mounth, year) {
        staticVariables.text(staticVariables.context, mounth, staticVariables.canvas.width * 37 / 100, staticVariables.canvas.height * 45 / 100, '12pt Ubuntu', 'white');
        staticVariables.text(staticVariables.context, year, staticVariables.canvas.width * 38 / 100, staticVariables.canvas.height * 60 / 100, '12pt Ubuntu', '#818aa8');
    };

    //Local method of initialization and drawing of graphics in the set canvas element
    this.initGraphics = function (canvasId, data1, data2, data3, data4, mounth, year) {
        staticVariables.initCanvas(canvasId);
        staticVariables.testDevice();
        staticVariables.drawGraphics(data1, data2, data3, data4);
        staticVariables.drawText(mounth, year);
        window.onresize = function () {
            staticVariables.testDevice();
            staticVariables.drawGraphics(data1, data2, data3, data4);
            staticVariables.drawText(mounth, year);
        };
    };
});