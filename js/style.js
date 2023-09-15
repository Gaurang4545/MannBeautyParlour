// Navbar on scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
        $('.navbar').fadeOut('slow').css('display', 'none');
    }
});

$('.flexslider').flexslider({
    animation: "fade",
    directionNav: false,
});

// page scroll
var sections = $('section')
nav = $('nav[role="navigation"]');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - 76
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
nav.find('a').on('click', function () {
  var $el = $(this)
    id = $el.attr('href');
$('html, body').animate({
    scrollTop: $(id).offset().top - 75
}, 500);
return false;
});
