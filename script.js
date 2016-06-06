var initParallax = function() {
    $('.slider').sss({
        arrows: false,
        controls: $('.quotes__dots__dot')
    });
};

var initFadingBlocks = function() {
    $('.fading').appear();
    $('.fading').on('appear', function() {
        $(this).css('opacity', 1);

        if ($(this).hasClass('skills')) {
            var $lines = $(this).find('.skills__line > div');

            $lines.css('transition', 'width 3s ease-out');

            $lines.eq(0).css('width', '95%');
            $lines.eq(1).css('width', '85%');
            $lines.eq(2).css('width', '80%');
        }
    });
    $('.fading').on('disappear', function() {
        $(this).css('opacity', 0);

        if ($(this).hasClass('skills')) {
            var $lines = $(this).find('.skills__line > div');

            $lines.css('transition', 'none');

            $lines.eq(0).css('width', '0');
            $lines.eq(1).css('width', '0');
            $lines.eq(2).css('width', '0');
        }
    });
    $('.fading').css('opacity', 0);
    $('.fading').css('transition', 'opacity 0.1s linear');
};

var initSideMenu = function() {
    $('.top__menu').on('click', function() {
        $('.side__menu').toggleClass('visible');
    });
    $('.side__menu .close').on('click', function() {
        $('.side__menu').removeClass('visible');
    });
    $('.side__menu a[href^="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

            target = $('.' + this.hash.substr(1));
            // console.log(target.offset().top + $(window).scrollTop());
            if (target.length) {
                $('html, body').animate({
                     scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
};

jQuery(function($) {
    initParallax();
    initFadingBlocks();
    initSideMenu();
});
