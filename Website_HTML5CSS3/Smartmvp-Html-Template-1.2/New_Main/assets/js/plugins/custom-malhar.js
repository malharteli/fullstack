// Javascript Document

/*=============================
  LOADER
===============================*/

//makes sure the app is loaded
$(window).load(function(){
  "use strict";

  //fade out loading animations
  $(".signal").fadeOut();
  //fade out preloader div
  $(".preloader").fadeOut("slow")

})

/*=============================
  SCROLL NAVBAR
===============================*/
$(window).scroll(function(){
  "use strict";

  var top = $(window).scrollTop();
  if (top > 60){
    $(".navbar").addClass("is-scrolling");
  } else {
    $(".navbar").removeClass("is-scrolling")
  }
});

/*=============================
  SPY For ACTIVE SECTION
===============================*/
(function($){
  "use strict";
  $('body').attr('data-spy', 'scroll').attr('data-target', '.navbar-fixed-top').attr('data-offset', '11');
})(jQuery);

/*=============================
  MOBILE MENU HIDER
===============================*/

(function($){
  "use strict";

  $(".nav.navbar-nav li a").click(function(){
    var $togglebtn = $(".navbar-toggle");
    if(!($togglebtn.hasClass("collapsed"))&&($togglebtn.is(":visible"))){
      $(".navbar-toggle").trigger("click");
    }
  });

})(jQuery);
