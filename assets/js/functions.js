$(function(){
  showHideMenu();
  smoothScroll(600);
  scrollTop();
  scrollAnimation();

});

//Function to load animation when is section is in viewport

function scrollAnimation() {

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };



  var win = $(window);

  var allMods = $(".about-section, .skills-section, .help-section, .contact-section, .footer");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });

  });
}

//This is for navigation section, and with this we can show and hide menu with click on menu icon

function showHideMenu(){
  var other = $('.landing-page, .about-section, .skills-section, .help-section, .contact-section, .footer');
  $(other).click(function(){
    $('.left-wrap').css('visibility', 'hidden');
      $('.menu-icon-content').css('visibility', 'visible');
  });

  $('.menu-icon').click(function(){
    $('.left-wrap').css('visibility', 'hidden');
    $('.menu-icon-content').css('visibility', 'visible');
  });
  $('.menu-icon-content').click(function(){
    $('.menu-icon-content').css('visibility', 'hidden');
    $('.left-wrap').css('visibility', 'visible');
  })
}

//This is for slowly scrolin after click on some of menu items

function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event) {

  	    var target = $( $(this).attr('href') );

  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
}

//This is to hide button for got top when is top and to show when user is not on top

function scrollTop() {
  $(window).scroll(function(){
  if ($(this).scrollTop() > 400) {
    $('.scrollTop').fadeIn();
  } else {
    $('.scrollTop').fadeOut();
  }
});
}
