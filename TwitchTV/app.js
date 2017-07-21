
$(document).ready(function () {

   

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
   });














