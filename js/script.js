
var OFFSET = -100;
$(function() {
    var buttons = $('.hero-section-scroll-down');
    console.log('xxx', buttons);
    buttons.click(function() {
        var $section = $($(this).parents('.section-element')[0]);
        $('html, body').animate({ scrollTop: $section.prop("scrollHeight") + $section.offset().top + OFFSET}, 1000);
    });
})