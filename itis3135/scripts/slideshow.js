$(document).ready(function(){
    $('.next').on('click',function(){
       
        var currentImg = $('.display');
        var nextImg = currentImg.next();
        

        if(nextImg.length){
            currentImg.removeClass('display').css('z-index',-10);
            nextImg.addClass('display').css('z-index', 10);
        }
       // if(nextImg.length == 0){
            //unsure how to loop to first image
       // }
    });
    $('.prev').on('click',function(){
       
        var currentImg = $('.display');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('display').css('z-index',-10);
            prevImg.addClass('display').css('z-index', 10);
        }
    });
});