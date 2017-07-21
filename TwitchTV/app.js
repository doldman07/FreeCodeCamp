
$(document).ready(function () {

    //var streamChannels = [
    //    "ESL_SC2",
    //    "freecodecamp",
    //    "cretetion",
    //    "OgamingSC2",
    //    "riotgames",
    //    "RobotCaleb",
    //    "habathcx"
    //];
    
    //var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/";
    //var streamURL = "https://wind-bow.gomix.me/twitch-api/streams/";
       

    //for (var i = 0; i < streamChannels.length; i++) {
    //    $.getJSON(channelURL + streamChannels[i], function (data) {

    //        var para = document.createElement("p");
    //        var logo = '<img src="' + data.logo + '" class="logo"/>';
    //        var streamers = '<a href="' + data.url + '" target"_blank">' +
    //                  data.display_name + '</a>';

    //        if (data.hasOwnProperty('error') && data.status == 404) {
    //            $(para).html(streamChannels[i] + ' does not exist');
    //        }
    //        else {
    //            $(para).append(logo + streamers);
    //            var newSpan = document.createElement("span");
    //            $(para).append(newSpan);
    //        }

            
                       

    //        $.getJSON(streamURL + streamChannels[i], function (data2) {
    //            if (data2.stream === null) {
    //                $(".results").append(para);
    //                $(para).attr('display-online', false).append('');
    //                $(newSpan).html("Offline");
                    
    //            }
    //            else {
    //                $(".results").prepend(para);
    //                $(para).attr('display-online', true).append('', data2.stream.game);
    //                $(newSpan).html("Online");
    //            }
    //        });


            


    //    });
        
    //}
    

    function streamChannels() {

        var urlChannel = "https://wind-bow.gomix.me/twitch-api/channels/";
        var urlStream = "https://wind-bow.gomix.me/twitch-api/streams/";
        var urlTwitch = "https://www.twitch.tv/"
       
        var streamChannels = [
            "ESL_SC2",
            "freecodecamp",
            "cretetion",
            "OgamingSC2",
            "riotgames",
            "RobotCaleb",
            "habathcx",
            "GeoffStorbeck",
            "noobs2ninjas",
            "brunofin",
            "medrybw"
        ];




        streamChannels.forEach(function (channel) {
            $.getJSON(urlStream + channel + "?callback=?", function (data) {
                var channelStatus, logo, description;
                if (data.stream === null) {
                    channelStatus = "OFFLINE";
                    description = "Offline";
                } else if (data.stream === undefined) {
                    channelStatus = "OFFLINE";
                    description = "Invalid";
                } else {
                    channelStatus = "ONLINE";
                    description = data.stream.game + ": " + data.stream.channel.status;
                };
                $.getJSON(urlChannel + channel + "?callback=?", function (data) {


                    logo = data.logo != null ? data.logo : "https://tse2.mm.bing.net/th?id=OIP.-aQ9g7V4jB53CbqDX9mNAAEsEg&pid=15.1";


                    var newPara = document.createElement('p');
                    $(".results").append(newPara);




                    if (channelStatus === 'OFFLINE') {
                        $(newPara).addClass('offline');
                    }
                    else {
                        $(newPara).addClass('online');
                    }


                    $(newPara).append('<img class="logo" src="' + logo + '"><a href="' + urlTwitch + channel + '" target="_blank">' + channel + '</a><span class="status">' + channelStatus + '</span>');

                   


                    

                });
            });
        });
    }
    streamChannels();
    //$(document).ready(function () {
    //    getChannelData();
    //    $(".filterButton").on("click", function () {
    //        if ($(this).attr("id") === "offlineButton") {
    //            $(".offline").removeClass("hide");
    //            $(".online").addClass("hide");
    //        }
    //        else if ($(this).attr("id") === "onlineButton") {
    //            $(".online").removeClass("hide");
    //            $(".offline").addClass("hide");
    //        } else {
    //            $(".online").removeClass("hide");
    //            $(".offline").removeClass("hide");
    //        }
    //    });
    //});






   

});









//original
//function getChannelData() {
//    var channelsURL = "https://wind-bow.gomix.me/twitch-api/channels/";
//    var streamsURL = "https://wind-bow.gomix.me/twitch-api/streams/";
//    var channels = ["freecodecamp", "OgamingSC2", "gsl", "ESL_SC2", "dreadztv", "thijshs", "noobs2ninjas", "cretetion", "comster404", "brunofin"];
//    channels.forEach(function (channel) {
//        $.getJSON(streamsURL + channel + "?callback=?", function (data) {
//            var status, logo, url, description;
//            if (data.stream === null) {
//                status = "offline";
//                description = "Offline";
//            } else if (data.stream === undefined) {
//                status = "offline";
//                description = "Invalid";
//            } else {
//                status = "online";
//                description = data.stream.game + ": " + data.stream.channel.status;
//            };
//            $.getJSON(channelsURL + channel + "?callback=?", function (data) {
//                logo = data.logo != null ? data.logo : "https://dummyimage.com/100x100/000/ffffff.png&text=X";
//                url = "https://www.twitch.tv/" + channel;
//                var html = '<div class="row valign-wrapper z-depth-1 ' + status + '">' +
//                    '<div class="channelLogo col s4 m2 l1 valign">' + '<img class="responsive-img" src="' + logo + '">' + '</div>' +
//                    '<div class="channelName col s4 m5 l5 valign center-align">' + '<a href="' + url + '">' + channel + '</a></div>' +
//                    '<div class="channelDescription col s4 m5 l6 valign center-align truncate">' + description + '</div>'
//                '</div>';
//                status === "online" ? $("#channels").prepend(html) : $("#channels").append(html);
//            });
//        });
//    });
//}
//$(document).ready(function () {
//    getChannelData();
//    $(".filterButton").on("click", function () {
//        if ($(this).attr("id") === "offlineButton") {
//            $(".offline").removeClass("hide");
//            $(".online").addClass("hide");
//        }
//        else if ($(this).attr("id") === "onlineButton") {
//            $(".online").removeClass("hide");
//            $(".offline").addClass("hide");
//        } else {
//            $(".online").removeClass("hide");
//            $(".offline").removeClass("hide");
//        }
//    });
//});




















