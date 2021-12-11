$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "info.json",
        beforeSend: function() {
            $("#info").html("");
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function(){
                $.each(this, function(key, value){
                $("#info").append
                ("<h3>"+ value.title+ "</h3>" + //prints value of title as h3
                "<p>" + value.pgraph +"</p> <br>" // prints value of pgraph as p
                )
            })  
            })
        }
    });
});