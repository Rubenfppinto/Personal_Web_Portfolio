$(document).ready(function() {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
        $(".menu a").on("click", function () {
            $("nav ul").removeClass("showing");
        });
    });
});

//Scrolling effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});