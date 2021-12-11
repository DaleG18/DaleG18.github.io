$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true, //auto slide functionality along with other functions to make slider customizable
        minSlides: 1, // code derived from https://bxslider.com/options/
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        captions: true,
        speed: 4000,
        pager: true,
        pagerType: 'short',
        pagerSelctor:"index_pager", 
    });
});