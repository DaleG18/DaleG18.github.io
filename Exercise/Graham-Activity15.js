$(document).ready(function(){
    $.getJSON("facultyList.json", function(data) {
        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#faculty").append(
            "<img src="+"'"+value.image+"'><br>"+
        "<h3>" + value.full_name + "</h3>" +
        "<h3>" + value.title + "</h3>" +
        "<p>" + value.tag_line + "</p><br>"
        );
        });
        });
        });
        });
