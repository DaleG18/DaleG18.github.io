$(document).ready(function() {
	$.getJSON("json_files/toobin.json",function(data){
        $.each(data,function(){
            $.each(this,function(key, value){
                $("#toobin"),append(
                    "Month: " + value.month + "<br>" + 
                    value.title + "<br>" +
                    "Speaker: " + value.speaker + "<br>" +
                    value.image + "<br>" + 
                    value.text + "<br><br>"
                );
            })
        })
    });
    $.getJSON("json_files/sorkin.json",function(data){
        $.each(data,function(){
            $.each(this,function(key, value){
                $("#sorkin"),append(
                    "Month: " + value.month + "<br>" + 
                    value.title + "<br>" +
                    "Speaker: " + value.speaker + "<br>" +
                    value.image + "<br>" + 
                    value.text + "<br><br>"
                );
            })
        })
    });
    $.getJSON("json_files/chua.json",function(data){
        $.each(data,function(){
            $.each(this,function(key, value){
                $("#chua"),append(
                    "Month: " + value.month + "<br>" + 
                    value.title + "<br>" +
                    "Speaker: " + value.speaker + "<br>" +
                    value.image + "<br>" + 
                    value.text + "<br><br>"
                    );
            })
        })
    });
    $.getJSON("json_files/sampson.json",function(data){
        $.each(data,function(){
            $.each(this,function(key, value){
                $("#sampson"),append(
                    "Month: " + value.month + "<br>" + 
                    value.title + "<br>" +
                    "Speaker: " + value.speaker + "<br>" +
                    value.image + "<br>" + 
                    value.text + "<br><br>"
                    );
            })
        })
    });
}); // end ready