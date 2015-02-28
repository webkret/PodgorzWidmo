

var navPos = $(".checkav").position().top;


$(document).ready(function() {
    $(window).load(function(){
        $('#preloader').fadeOut('slow', 'swing',function(){
            $(this).remove();
            $(".logoContainer .logoImg").addClass('added');
            $(".logoContainer h1").addClass('added');
            $(".logoContainer h3").addClass('added');
            $(".logoContainer a").addClass('added');
            $(".navbar-default").addClass('added');
            $(".headmaster").removeClass('nomenu');
        });
    });
    var bodyheight = $(window).height();
    var bodyalmostheight = $(window).height()*0.87;
    var bodyhalfheight = $(window).height()*0.60;
    $(".powerFrame").height(bodyheight);
    $(".navWrap-inner").height(bodyheight);
    $(".powerFrame.titler").height(bodyalmostheight);
    $(".powerFrame.titler.single").height(bodyhalfheight);
    navPos = Math.floor($(".checkav").position().top);

    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		var s = skrollr.init({forceHeight: false});
	};

	skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,

    //The easing function to use.
    easing: 'sqrt',

    //Multiply your data-[offset] values so they match those set in skrollr.init
    // scale: 2,

    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        // return 1000;

        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        return Math.abs(currentTop - targetTop) * 0.5;
    },

    //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
    //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
    // handleLink: function(link) {
    //     return 400;//Hardcoding 400 doesn't make much sense.
    // }
    });



});

// for the window resize
$(window).resize(function() {
    var bodyheight = $(window).height();
    var bodyalmostheight = $(window).height()*0.87;
    var bodyhalfheight = $(window).height()*0.60;
    $(".powerFrame").height(bodyheight);
    $(".navWrap-inner").height(bodyheight);

    $(".powerFrame.titler").height(bodyalmostheight);
    $(".powerFrame.titler.single").height(bodyhalfheight);

    checkHeight();
});

// scrolling checking

function checkHeight(){


    scrollTop = $(window).scrollTop();

    scrollBottom = $(window).scrollTop() + $(window).height();
    windowHeight = $(window).height();
    documentHeight = $(document).height();

    footerPos = documentHeight - windowHeight - scrollTop;

    menuTop = navPos;

     if( scrollTop > navPos){
       $('.checkav').addClass('fixIn');  
       $('.nav-toggle-button').addClass('fixIn');  
       $('.logoNav').addClass('fixIn');  
       $('.logoNav_secondary').addClass('fixIn');  
     }
     else if(scrollTop < navPos){
        $('.checkav').removeClass('fixIn');
        $('.nav-toggle-button').removeClass('fixIn');
        $('.logoNav').removeClass('fixIn');
     	$('.logoNav_secondary').removeClass('fixIn');
     }
}

$(document).scroll(function(){
	checkHeight();
});


$('body').scrollspy({ target: '.navigator' });
$('.sideitem').tooltip();

jQuery('ul.nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
});



var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
var checkin = $('#dp1').datepicker({
  onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.setValue(newDate);
  }
  checkin.hide();
  $('#dp2')[0].focus();
}).data('datepicker');
var checkout = $('#dp2').datepicker({
  onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');



/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
    