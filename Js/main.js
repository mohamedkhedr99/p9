// Use NiceScroll Library
$('body').niceScroll({cursorcolor:'#57a8d5'});

$('.OURVISSION h5, .Plus').click(function(){
	$('.Hide').fadeToggle();
	$('.Horz').fadeToggle();
})

$('.OURVISSION2 h5, .Plus2').click(function(){
	$('.Hide2').fadeToggle();
	$('.Horz2').fadeToggle();
})

//ScrollTo The Top
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.ScrollTop').fadeIn();
    } else {
        $('.ScrollTop').fadeOut();
    }
});
$('.ScrollTop').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    });
//End ScrollTo The Top