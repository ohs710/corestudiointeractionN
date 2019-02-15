function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#bedframe').offset().top;
    if (window_top > top) {
        $('#mattress').addClass('stick');
        $('#bedframe').height($('#mattress').outerHeight());
    } else {
        $('#bedframe').removeClass('stick');
        $('#mattress').height(0);
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});







