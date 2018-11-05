function isScrolledIntoView(elem) {
   var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(){

    if (isScrolledIntoView('.box')) {
        $('img').addClass('animated flip').css('background', 'red');
        //added background red so you can see it has triggered
    }
    else {
    $('img').removeClass('animated flip');
    }

});
