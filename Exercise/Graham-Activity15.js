$(document).ready(function(){
    $.ajax({ 
        type: "get", 
        url: "facultyList.json", 
        beforeSend: function() {$("#faculty").html("Loading...");}, 
        timeout: 10000, 
        error: function(xhr, status, error) { 
            alert("Error: " + xhr.status + " - " + error); 
        }, 
        dataType: "json", 
        success: function(data) { 
            $("#faculty").html(""); 
            $(data).find("facultymembers").children().each(function() { 
                var xmlDoc = $(this); 
                $("#faculty").append("<img>" +  
                    xmlDoc.find("image").text() + "</img>" +  
                    xmlDoc.find("full_name").text() + "<br>" +  
                    xmlDoc.find("department").text() + "<br>" +
                    xmlDoc.find("bio").text() + "<br>");  
            }); 
        } 
    }); 
});
