// JavaScript source code

$(document).ready(function () {
    var randomQuote;
    var author;
    function getQuote() {

        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function (data) {
            randomQuote = data.quoteText.trim();
            author = data.quoteAuthor.trim();
            $(".quote").html(randomQuote);
            $(".author").html("-" + author);
        });


    };
    $("#btnTweet").on('click', function () {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + "-" + author);
    });

    $("#btnQuote").on('click', function () {
        getQuote();
    });
});











