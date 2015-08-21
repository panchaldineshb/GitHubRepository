$(function () {
    var timeOut;
    var menu = $('#menu');
    var mainmenu = $('.main-nav > li > a');
    var rightbar = $('#rightbar2');
    var menuScroll = $('#menuScrollArea');
    var frame = $("#sidebarscroll");
    var container = $('.maincontainer');
    var midcontainer = $('.mid-content');
    var collapseLink = $('.collapse-link');
    var collapseRightbar = $('.collapse-link-rightbar');

    $('.dropdown-menu input, .dropdown-menu label').click(function (e) {
        e.stopPropagation();
    });

    mainmenu.click(function () {
        //alert();
        if ($(this).hasClass('active')) {
            //alert('act');
            $('.main-nav li ul').slideUp();
            $(this).removeClass('active');
        }
        else {
            $('.main-nav li ul').slideUp();
            $(this).next().slideToggle();
            $('.main-nav li a').removeClass('active');
            $(this).addClass('active');
        }
    });

    collapseLink.click(function (e) {
        //alert('col');
        var $this = $(e);
        if ($(this).parent().parent().hasClass("opened")) {
            $(this).parent().parent().removeClass("opened");
            dashboard.toggleMainMenu();
        }
        else {
            $(this).parent().parent().addClass("opened");
            dashboard.toggleMainMenu();
        }
    });
    collapseRightbar.click(function (e) {
        //alert('rightbar');
        var $this = $(e);
        if ($(this).parent().parent().hasClass("closed")) {
            $(this).parent().parent().removeClass("closed");
            dashboard.toggleRightbar();
        }
        else {
            $(this).parent().parent().addClass("closed");
            dashboard.toggleRightbar();
        }
    });
    function setHeight() {
        navHeight = $(container).height()
        $('.main-menu').css('height', navHeight + 'px');
        $('.rightbar2').css('height', navHeight + 'px');
    }

    //$(window).bind("load", function() {
    //
    //  setHeight();
    //});

    dashboard = {
        init: function () {
            //alert($("#main").height());
        },

        toggleMainMenu: function () {
            var toggleWidth = null;
            //var contoggleWidth = null;
            if (menu.width() == 180) {
                toggleWidth = "35px";
                menu.find('.dashboard-link img').css('margin-left', -86);
                collapseLink.css('background-position', 'left top');
                menu.find('.navi-header').css('display', 'none');
                menu.find('.main-list .main-list-item .first-list').css('display', 'none');
                menu.find('.main-list .main-list-item .btn').css('display', 'none');
                menu.find('.main-list .main-list-item .first-list .first-list-item .second-list').css('display', 'none');
                //dashboard.destroyNavigationScroll();
            } else {
                toggleWidth = "180px";
                menu.find('.dashboard-link img').css('margin-left', 0);
                collapseLink.css('background-position', 'right top');
                menu.find('.navi-header').css('display', 'block');
                menu.find('.main-list .main-list-item .first-list').css('display', 'block');
                menu.find('.main-list .main-list-item .btn').css('display', 'block');
                menu.find('.main-list .main-list-item .first-list .first-list-item .second-list').css('display', 'block');
                //dashboard.activeNavigationScroll();
                menu.find('.scrollbar').css('display', 'block');
            }

            var toggleMargin = container.css('margin-left') === "180px" ? "34px" : "180px";
            var toggleWidthCon = container.css('width') === "990px" ? "1136px" : "990px";
            var toggleMidCon = midcontainer.css('width') === "760px" ? "905px" : "760px";
            //var toggleMidCon2 = midcontainer.css('width') === "1080px" ? "730px" : "1080px";
            menu.animate({ width: toggleWidth }, 200);
            container.animate({ marginLeft: toggleMargin, width: toggleWidthCon }, 200);

            if ($('#rightbar2').hasClass("closed")) {
                //alert('rightbar closed');
                if ($('#menu').hasClass("opened")) {
                    midcontainer.animate({ width: 1120 }, 200);
                }
                else {
                    midcontainer.animate({ width: 975 }, 200);
                }
                //$(this).parent().removeClass("opened");
                //dashboard.toggleMainMenu();
            }
            else {
                //alert('rightbar opened');
                if ($('#menu').hasClass("opened")) {
                    midcontainer.animate({ width: 905 }, 200);
                }
                else {
                    midcontainer.animate({ width: toggleMidCon }, 200);
                }

                //$(this).parent().addClass("opened");
                //dashboard.toggleMainMenu();
            }
        },

        toggleRightbar: function () {
            var toggleWidth = null;
            if (rightbar.width() == 230) {
                //alert('hi');
                toggleWidth = "15px";
                rightbar.find('.dashboard-link img').css('margin-left', -86);
                collapseLink.css('background-position', 'left top');
                //rightbar.css('padding-left', 15);
                rightbar.find('.right-bar-box').css('margin-left', 15);
                rightbar.find('.navi-header').css('display', 'none');
                rightbar.find('.main-list .main-list-item .first-list').css('display', 'none');
                rightbar.find('.main-list .main-list-item .btn').css('display', 'none');
                rightbar.find('.main-list .main-list-item .first-list .first-list-item .second-list').css('display', 'none');
                container.css('background-position', -300);

                //dashboard.destroyNavigationScroll();
            } else {
                toggleWidth = "230px";
                rightbar.find('.dashboard-link img').css('margin-left', 0);
                container.css('background-position', 'right');
                collapseLink.css('background-position', 'right top');
                rightbar.find('.navi-header').css('display', 'block');
                rightbar.find('.right-bar-box').css('margin-left', 0);
                rightbar.find('.main-list .main-list-item .first-list').css('display', 'block');
                rightbar.find('.main-list .main-list-item .btn').css('display', 'block');
                rightbar.find('.main-list .main-list-item .first-list .first-list-item .second-list').css('display', 'block');
                //dashboard.activeNavigationScroll();
                rightbar.find('.scrollbar').css('display', 'block');
            }

            //var toggleMargin = container.css('margin-left') === "180px" ? "35px" : "180px";
            var toggleWidthCon = midcontainer.css('width') === "760px" ? "975px" : "760px";
            rightbar.animate({ width: toggleWidth }, 200);
            midcontainer.animate({ width: toggleWidthCon }, 200);

            if ($('#menu').hasClass("opened")) {
                if ($('#rightbar2').hasClass("closed")) {
                    midcontainer.animate({ width: 1120 }, 200);
                }
                else {
                    midcontainer.animate({ width: 905 }, 200);
                }
            }
            else {
                //alert('rightbar opened');
                if ($('#rightbar2').hasClass("closed")) {
                    midcontainer.animate({ width: 975 }, 200);
                }
                else {
                    midcontainer.animate({ width: toggleMidCon }, 200);
                }
            }
        },

        collapseMenus: function (e) {
            var $this = $(e);
            var $menu = $this.next('.first-list');

            if ($menu.is(':hidden')) {
                $(e).find('.list-icon').removeClass('list-icon-hide');
                $menu.slideDown(350);
            } else {
                $menu.slideUp(350);
                $(e).find('.list-icon').addClass('list-icon-hide');
            }
            setTimeout(function () {
                dashboard.updateNavigationScroll();
            }, 400);
        },

        collapseKIT: function (e) {
            $(e).parent().find('.info-box-collapse').animate({
                height: "toggle"
            }, 350, function () {
            });
            $(e).toggleClass('link-collapse-hide');
        },
    },

	dashboard.init();
});