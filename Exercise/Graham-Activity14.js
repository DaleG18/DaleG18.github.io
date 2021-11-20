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
                            var jsonDoc = $.parseJSON(data);
                                $("main > h2").html(jsonDoc.speakers[0].month + "<br/>" + jsonDoc.speakers[0].speaker);
                                $("main > h1").html(jsonDoc.speakers[0].title);
                                $("main > img").attr("src", jsonDoc.speakers[0].image);
                                $("main > p").html(jsonDoc.speakers[0].text);
        }
        });
        }