// Javascript Document

"use strict";

/*=============================
  LOADER
===============================*/

//makes sure the app is loaded
$(window).load(function(){

  //fade out loading animations
  $(".signal").fadeOut();
  //fade out preloader div
  $(".preloader").fadeOut("slow")

})

/*=============================
  SCROLL NAVBAR
===============================*/
$(window).scroll(function(){

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
  $('body').attr('data-spy', 'scroll').attr('data-target', '.navbar-fixed-top').attr('data-offset', '11');
})(jQuery);

/*=============================
  MOBILE MENU HIDER
===============================*/

(function($){

  $(".nav.navbar-nav li a").click(function(){
    var $togglebtn = $(".navbar-toggle");
    if(!($togglebtn.hasClass("collapsed"))&&($togglebtn.is(":visible"))){
      $(".navbar-toggle").trigger("click");
    }
  });

})(jQuery);

/*=============================*/
/*=============================*/
/*=============================
  DOCUMENT READY
  ===============================*/
/*===============================*/
/*===============================*/

$(document).ready(function(){

/*=============================
  PARALLAX STELLAR WITH MOBILE FIXES
===============================*/

if(Modernizr.touch && ($(".header").attr("data-stellar-background-ratio")!== undefined)){
  $('.header').css('background-attachment', 'scroll');
  $('.header').removeAttr('data-stellar-background-ratio');
} else {
  $(window).stellar({
    horizontalScrolling:false
  });
}

/*=============================
  WOW ANIMATIONS
===============================*/
new WOW().init();

/*=============================
  VIDEO BACKGROUND
===============================*/
$("#top").vide("assets/images/video/ocean",{
  posterType: "jpg"
});

/*=============================
  SCROLLTO
===============================*/
var onMobile;

onMobile=false;
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){onMobile=true;}
if(onMobile  == true){
  jQuery("a.scrollto").click(function(event){
    jQuery("html,body").scrollTo(this.hash, this.hash, {gap:{y:-10}, animation: {easing:'easeInOutCubic', duration:0}});
    event.preventDefault();
  });
}else {
  jQuery("a.scrollto").click(function(event){
    jQuery("html, body").scrollTo(this.hash, this.hash, {gap:{y:-10}, animation: {easing:'easeInOutCubic', duration: 1500}});
    event.preventDefault();
  })
}

/*=============================
  SIGNUP-DIVIDER ANIMATED POLYGON BACKGROUND
===============================*/

  var container = document.getElementById('canvas-bg');
  var renderer = new FSS.CanvasRenderer();
  var scene = new FSS.Scene();
  var light = new FSS.Light('323A45', '323A45');
  var geometry = new FSS.Plane(2000, 1000, 15, 8);
  var material = new FSS.Material('FFFFFF','FFFFFF');
  var mesh = new FSS.Mesh(geometry, material);
  var now, start = Date.now();

  function initialise(){
    scene.add(mesh);
    scene.add(light);
    container.appendChild(renderer.element);
    window.addEventListener('resize', resize);
  }

  function resize(){
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }

  function animate(){
    now = Date.now() - start;
    light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
    renderer.render(scene);
    requestAnimationFrame(animate);
  }

  initialise();
  resize();
  animate();



})
