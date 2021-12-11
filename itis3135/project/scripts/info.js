$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "info.json",
        beforeSend: function() {
            $("#info").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                $("#info").append
                ("<h3>"+ value.title+ "</h3>" +
                "<p>" + value.pgraph +"</p> <br>"
                )
            })  
            })
        }
    });
});