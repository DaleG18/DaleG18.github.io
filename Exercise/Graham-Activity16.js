$(document).ready(function(){
var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

$.getJSON(url, function(data){ 
    var html = ""; 
    
    $.each(data.items, function(i, item){ 
        html += "<a href=" + item.media.m + 
        " data-lightbox='flickR' data-title=" + item.title + ">"; //calls lightbox.js
            html += "<img src=" + item.media.m + ">"; //adds image tag
                html += "</a>"; // end of <a> wrapping
    
    }); 
 
    $("#new_building").html(html); 
});           
});