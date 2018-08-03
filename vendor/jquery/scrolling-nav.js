//jQuery to collapse the navbar on scroll
(window).scroll(function() {
    if ($(".my-navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        var $navHeihgt = $('.nav').outerHeight();
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-$navHeihgt
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
