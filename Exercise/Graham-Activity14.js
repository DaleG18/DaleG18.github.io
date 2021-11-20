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
}); // end ready