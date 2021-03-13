function slide(){
    $('.post_box:first').fadeOut('fast', function(){
        $(this).appendTo('#star_post');
    });
    $('.post_box:eq(1)').fadeIn('fast');
    $('.post_box:eq(2)').fadeIn('fast');
    $('.post_box:eq(3)').fadeIn('fast');
    $('.post_box:eq(4)').fadeIn('fast');
    $('.post_box:eq(5)').fadeIn('fast');
    $('.post_box:eq(6)').fadeIn('fast');
    $('.post_box:eq(7)').fadeIn('fast');
    $('.post_box:eq(8)').fadeIn('fast');
    $('.post_box:eq(9)').fadeIn('fast');
}
setInterval('slide()','6000');