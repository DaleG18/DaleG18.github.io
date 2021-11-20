$(document).ready(function() {
	$("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
               var filename = title+".json";
        getJSON(filename);
        });
        
        }); // end ready
        function getJSON(jsonFileURL) {
        $.ajax({
        url: "json_files/" + jsonFileURL,
        dataType: "text",
        success: function (data) {
        var json = $.parseJSON(data);
        $("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
        $("main > h1").html(json.speakers[0].title);
        $("main > img").attr("src", json.speakers[0].image);
        $("main > p").html(json.speakers[0].text);
        }
        });
        }