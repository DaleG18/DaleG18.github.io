$(document).ready(function(){
var url = "http://api.flickr.com/services/feeds/photos_public.gne?"+
"id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

$.getJSON(url, function(data){ 
    var html = ""; 
    $.each(data.items, function(i, item){ 
        html += "<h2>" + item.title + "</h2>";   
        html += "<img src=" + item.media.m + ">"; 
        html += "<p></p>"; 
    }); 
 
    $("#new_building").html(html); 
});           
});