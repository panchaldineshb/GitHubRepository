'use strict';

var mainModule = angular.module('myApp', ['ngSanitize']);

    // Контроллер функционала кнопки скролинга к главному меню
mainModule.controller('wraperCtrl',function($scope){
    "use strict";

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#backTo').is(':hidden')) {
                $('#backTo').css({
                opacity : 1
                }).fadeIn('slow');
            }
        } else {
            $('#backTo').stop(true, false).fadeOut('fast');
        }
    });
    $('#backTo').click(function() {
        $('html, body').stop().animate({
            scrollTop : 0
        }, 300);
    });
});

    // контроллер отображения даты времени
mainModule.controller('dateTimeCtrl',function($scope, $interval){
    "use strict";

    $scope.dateTimeNs={};

    $interval(function(){
        var fullDate;
        var time= new Date();
        var fullTime = function(param){
            if(param<10){
                return "0" + param;
            }else{
                return param;
            }
        };
        var fullMonth = Number(time.getMonth())+1;
        fullDate = time.getFullYear() + "/" + fullTime(fullMonth) + "/"
                        + fullTime(time.getDate()) + " " + time.getHours() + ":"
                        + fullTime(time.getMinutes())+ ":" + fullTime(time.getSeconds());
        $scope.dateTimeNs.value = fullDate;
    }, 1000);

});

    // Контролер блока слайдера
mainModule.controller('sliderCtrl',function($scope, $interval){
    "use strict";

    $scope.sliderNs = {};

    $scope.sliderNs.cntItteration = 0;
    $scope.sliderNs.sliderInfo = dataModel.sliderInfo;
    $('#before').add('#next').add('#navy').hide();

    $scope.sliderNs.displaySlider = function(){
        $('#before').add('#next').add('#navy').show();
        $('#learnMore').hide();
        $scope.sliderNs.cntItteration++;
        $interval(function(){
            if($scope.sliderNs.cntItteration == 3){
                $scope.sliderNs.cntItteration=1;
            }else{
                $scope.sliderNs.cntItteration++;
            }
            switch($scope.sliderNs.cntItteration){
                case 1:
                    $scope.sliderNs.navyStyleSlide1 = {opacity:1};
                    $scope.sliderNs.navyStyleSlide2 = {opacity:0.5};
                    $scope.sliderNs.navyStyleSlide3 = {opacity:0.5};
                    break;
                case 2:
                    $scope.sliderNs.navyStyleSlide1 = {opacity:0.5};
                    $scope.sliderNs.navyStyleSlide2 = {opacity:1};
                    $scope.sliderNs.navyStyleSlide3 = {opacity:0.5};
                    break;
                case 3:
                    $scope.sliderNs.navyStyleSlide1 = {opacity:0.5};
                    $scope.sliderNs.navyStyleSlide2 = {opacity:0.5};
                    $scope.sliderNs.navyStyleSlide3 = {opacity:1};
                    break;
                default :
                    $scope.sliderNs.cntItteration=1;
            }
        },4000);
    };

    $scope.sliderNs.previousSlide = function(){
        if($scope.sliderNs.cntItteration == 1){
            $scope.sliderNs.cntItteration == 3;
        }else{
            $scope.sliderNs.cntItteration-- ;
        }
    };

    $scope.sliderNs.nextSlide = function(){
        if($scope.sliderNs.cntItteration ==3){
            $scope.sliderNs.cntItteration == 1;
        }else{
            $scope.sliderNs.cntItteration++ ;
        }
    };
});

    //Котроллер блока "О нас"
mainModule.controller("aboutCtrl", function($scope){
    "use strict";

    $scope.aboutNs = {};

    $scope.statisticType = dataModel.statisticType;
});

    //Котроллер блока "Наша команда"
mainModule.controller("teamCtrl",function($scope){
    "use strict";

    $scope.teamNs = {};

    $scope.ourTeam = dataModel.ourTeam;
});

    //Контролер блока "Контактной информации"
mainModule.controller('ourClientsCtrl',function($scope, $http, $sanitize, serviceMessage){
    "use strict";

    $scope.ourClientsNs = {};

    $scope.ourClientsNs.submitFunc  = function(data){

        for(var i in data){
            data[i]=$sanitize(data[i]);
        }
        $http.post('index.html', data).success(function(){
            serviceMessage.showMessage(true,"Your message has been delivered, please wait for the answer to your email!","Result by send a message.","#messageResponse");
        }).error(function(){
            serviceMessage.showMessage(false,"Your message could not be delivered, please resend later!","Result by send a message.","#messageResponse");
        });

        $('input').addClass('ng-pristine').removeClass('ng-dirty');
        $('input').addClass('ng-pristine').removeClass('ng-dirty');
        $('textarea').addClass('ng-pristine').removeClass('ng-dirty');

        $scope.ourClientsNs.formData ={};
        $scope.contactForm.nameForm.$dirty = false;
        $scope.contactForm.nameForm.$pristine = true;
        $scope.contactForm.emailForm.$dirty = false;
        $scope.contactForm.emailForm.$pristine = true;
        $scope.contactForm.messageForm.$dirty = false;
        $scope.contactForm.messageForm.$pristine = true;
    };

});

mainModule.directive("directiveStatistic", function(){
    "use strict";
    return{
        link: function(scope, element,attributes){
            scope.data = scope[attributes["directiveStatistic"]];
        },
        template:"<div ng-repeat='items in data' class='statistic'><div class='lineInfo'><span>{{items.name}}</span><span> / {{items.percent}}</span></div><div class='lineProgress'><div class='progress' style='width:{{items.percent}}'></div></div></div>",
        restrict:"A"
    }
});

mainModule.directive("directiveTeam", function(){
    "use strict";
    return{
        link: function(scope, element,attributes){
            scope.data = scope[attributes["directiveTeam"]];
        },
        template:"<div ng-repeat='items in data' class='teamBlock'><div class='teamPhoto'></div><div class='teamName'><span>{{items.name}}</span></div><div class='teamJob'><span>{{items.position}}</span></div><p class='teamAbout'>{{items.aboutIt}}</p> <div class='teamLink'> <div class='socTwitter'></div> <div class='socFacebook'></div> <div class='socDribble'></div> <div class='socGoogle'></div> <div class='socLinked'></div> </div> </div>",
        restrict:"A"
    }
});

    //Сервис вывода на экран информационного сообщения
mainModule.factory('serviceMessage',function(){
    "use strict";
    return{
        showMessage:function(status, info, title, id){
            $(id).html('<div><span id="messageResponseTitle"></span></div><div><span id="messageResponseText"></span></div>').addClass('statusResponseSuccess');
            $('#messageResponseTitle').text(title);
            if(status){
                $('#messageResponse').addClass('statusResponseSuccess').removeClass('statusResponseError');
            }else{
                $('#messageResponse').addClass('statusResponseError').removeClass('statusResponseSuccess');
            }
            $('#messageResponseText').text(info);
            $('#messageResponse').toggle()
                .animate({'opacity':'+=1'},100,'swing')
                .delay(4000)
                .animate({'opacity':'-=1'},1000,'swing', function(){
                  $('#messageResponse').toggle();
            });
        }
    }
});
