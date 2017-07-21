// JavaScript source code
//var quotes = [
//    'The way get started is to quit talking abd begin doing. - Walt Disney',
//    'The pessimist sees difficulty in every opportunity. the optmist sees the opportunity in every difficulty. -Winston Churchill',
//    'Don\'t let yesterday take up too much of today. -Will Rogers',
//    '1',
//    '2',
//    '3',
//    '4',
//    '5',
//    '6',
//    '7',
//    '8',
//    '9',
//    '10'
//]

//function newQuote() {
//    var randomNumber = Math.floor(Math.random() * (quotes.length));
    
//    document.getElementById('display-quote').innerHTML = quotes[randomNumber];

   
//}


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











