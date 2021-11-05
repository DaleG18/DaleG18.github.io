$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function(){
            var thumby= new Image();
            thumby.src = $(this).attr("href");
        });
        // set up the event handlers for each link
        $("#image_list a").click(function (evt)
    {
        var horsey = $(this).attr("href");
        $("#image").attr("src", horsey);
        $("#image").fadeOut(3000, function ()
        {
            $("#image").attr("src",horsey).fadeIn(3000); 
        });
        
        var caption = $(this).attr("title");
        $("#caption").fadeOut(3000, function ()
        {
            $("#caption").text(caption).fadeIn(3000);
        });
    			// get the image URL and caption for each image and animate the caption
                $("h2").animate({
                    fontSize: "2.0em",
                }, 3000);
            // cancel the default action of each link
            evt.preventDefault();
    });

    // move the focus to the first link
    $("li:first-child a").focus();
}); 