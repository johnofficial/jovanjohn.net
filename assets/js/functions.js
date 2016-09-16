$(function(){
  showHideMenu();
  smoothScroll(600);
  scrollTop();
  gridMasonry();
});


//This is for navigation section, and with this we can show and hide menu with click on menu icon

function showHideMenu(){
  $('.menu-icon').click(function(){
    $('.left-wrap').css('visibility', 'hidden');
  });
  $('.menu-icon-content').click(function(){
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





                                                //BLOG
function gridMasonry(){

  $('.grid').masonry({
    itemSelector: '.post',
    columnWidth: 160,
    gutter: 10
  });

  $('.post').each(function(i){
    setTimeout(function(){
      $('.post').eq(i).addClass('is-visible');
    }, 200 * i);
  });
}
