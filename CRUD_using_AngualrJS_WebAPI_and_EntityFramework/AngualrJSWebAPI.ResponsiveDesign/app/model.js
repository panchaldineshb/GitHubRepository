'use strict';

var modelData = {};

modelData.usersDb = {
    userLogin:"Suaveliy",
    userSlogan:"If you want to be clear, you must be a clear throughout.",
    userPhoto:"components/img/user_profile.png",
    userActivity:{
        comment:173,
        view:841,
        like:49
    },
    userVideos:[
        {videoTitle:"VIDEO BY VIJOKE", videoSrc:"components/video/5733.mp4", videoDate:"03.07.15", videoDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque consequatur cumque deserunt dignissimos eligendi explicabo illum impedit in ipsam ipsum nihilLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda cumque debitis dignissimos doloresLorem ipsum dolor sit amet, consectetur adipisicing elit."}
    ],
    userTweets:[
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis incidun"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis inciduntetur adipisicing elit"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis incidun"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem, facilis incidun"},
        {tweetAuthor:"@Qours", tweetTime:"3 minutes ago", tweetDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt exercitationem"}
    ],
    userStatistics:[
        {type:"weekPeriod",
            intervals:{
                beforeInt:{title:"SAN", result:{sign:"+", pes:21}},
                averageInt:{title:"WEN", result:{sign:"+", pes:17}},
                afterInt:{title:"SAT",result:{sign:"+", pes:35}}
            },
            dataPoints:[[0,5],[30,12],[40,8],[45,10],[50,16],[55,14],[60,20],[65,22],[80,17],[90,10],[100,15]]
        },
        {type:"monthPeriod",
            intervals:{
                beforeInt:{title:"1", result:{sign:"+", pes:11}},
                averageInt:{title:"15", result:{sign:"+", pes:18}},
                afterInt:{title:"30",result:{sign:"+", pes:24}}
            },
            dataPoints:[[0,15],[30,17],[40,18],[45,19],[50,26],[55,22],[60,28],[65,27],[80,15],[90,12],[100,16]]},
        {type:"yearPeriod",
            intervals:{
                beforeInt:{title:"MAY", result:{sign:"+", pes:27}},
                averageInt:{title:"JUN", result:{sign:"-", pes:2}},
                afterInt:{title:"JUL",result:{sign:"+", pes:37}}
            },
            dataPoints:[[0,3],[30,19],[40,18],[45,24],[50,19],[55,17],[60,23],[65,25],[80,27],[90,15],[100,5]]}
    ],
    allMessages:23,
    allInvites:5,
    allNews:3,
    discStatus:{
        download:"76%",
        upload:"54%"
    },
    osUse:{
        osIOS:21,
        osMac:48,
        osLinux:9,
        osWin:22
    }
};