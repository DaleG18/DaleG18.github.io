$(document).ready(function() {
	$("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
               var filename = title+".json";
        consumeJSON(filename);
        });
        
        }); // end ready
        function consumeJSON(jsonFileURL) {
        $.ajax({
        url: "json_files" + jsonFileURL,
        //handle as text
        dataType: "text",
        success: function (data) {
        //data downloaded + pass data
        var json = $.parseJSON(data);
        // display results
        $("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
        $("main > h1").html(json.speakers[0].title);
        $("main > img").attr("src", json.speakers[0].image);
        $("main > p").html(json.speakers[0].text);
        }
        });
        }