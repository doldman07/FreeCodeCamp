



$(document).ready(function () {
    $('#btnSearch').click(function () {
        var query = $('#txtSearch').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&format=json&callback=?";
        var display = '';
        $('#results').html('');
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "jsonp",
            success: function (data) {
                for (var i = 0; i < data[1].length; i++) { 
                    //display += ("<p><a href= " + data[3][i] + ">" + data[1][i] + "</a>" + "&nbsp;" + data[2][i] + "</p>");
                    display += ("<a href = " + data[3][i] + " target = '_blank'>" + "<p>" + data[1][i] + data[2][i] + "</p></a>");
                }
                $('#results').html(display);
                
                
            },
            error: function (error) {
                alert("Error");
            }
        });
    });
    
});

function RandomSearch() {
    var randomArticle = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(randomArticle);
}








