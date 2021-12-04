$(function(){
$('#defaultCube').imagecube(); 
 
$('#stopCube').click(function() { 
    var start = $(this).text() === 'Start'; 
    $(this).text(start ? 'Stop' : 'Start'); 
    $('#defaultCube').imagecube(start ? 'start' : 'stop'); 
}); 
 
$('#removeCube').click(function() { 
    var destroy = $(this).text() === 'Remove'; 
    $(this).text(destroy ? 'Re-attach' : 'Remove'); 
    $('#defaultCube').imagecube(destroy ? 'destroy' : {}); 
});
});