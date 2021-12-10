$(document).ready(function(){
    $.getJSON("services.json", function(data) {
        $.each(data, function() {
        $.each(this, function(key, value) {
        $("#services").append(
            "<img src="+"'"+value.image+"'><br>"+ '" width = 80 height = 80>' +
            "<h2>" + value.full_name + "</h2>" +
            "<h3>" + value.department + "</h3>" +
            "<h4>" + value.phone_number + "</h4>" +
            "<p>" + value.bio + "</p><br>"
                        );
                    });
                });
            });
        });