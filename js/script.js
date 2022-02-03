$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {

            $('.btn-scroll-top').fadeIn();
        
        } else {
            $('.btn-scroll-top').fadeOut();
        }
    })

    $('.btn-scroll-top').on('click', function() {
        $('html,body').animate({scrollTop:0},800)
    });

    $(window).scroll(function() {

        if($(this).scrollTop() > 200) {

            $('.navbar').addClass('fixed-nav');

        } else {
            $('.navbar').removeClass('fixed-nav');
        }
    })

    $('.loading-screen').fadeOut(800);

});