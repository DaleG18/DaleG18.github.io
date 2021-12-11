$(document).ready(function(){
    $.getJSON("services.json", function(data) {
        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#services").append(
            "<img src="+"'"+value.image+"'><br>"+
            "<h3>" + value.full_name + "</h3>" +
            "<h4>" + value.department + "</h4>" +
            "<h5>" + value.phone_number + "</h5>" +
            "<a href=" + value.website + ">" + value.full_name +"</a>" + 
            "<p>" + value.bio + "</p><br>"
                        );
                    });
                });
            });
        });