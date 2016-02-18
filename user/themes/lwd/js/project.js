$(document).ready(function() {
  imgPagination();

  $('.horizontal-scroll').mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
  });

  $('.horizontal-scroll').scroll(function() {
    var sectionOffset = $('.horizontal-scroll').offset().left;
    var img = $('.project-img');


    $('.pagination a').each(function () {
      var sectionOffset = $('.horizontal-scroll').offset().left;
      var scrollPos = $('.horizontal-scroll').scrollLeft() + sectionOffset;
      var currLink = $(this);
      var img = $(currLink.attr('href'));
      var imgPos = img.position().left;
      
      if (imgPos <= scrollPos && imgPos + img.width() > scrollPos) {

        currLink.addClass('active');
      }
      else{
        currLink.removeClass('active');
      }
    });

});

}); 




var imgPagination = function() {
  var links     = $('.pagination a'),
      firstLink = $('.pagination a:first');

  // add active class to first image pagination
  firstLink.addClass('active');

  // on click switch active to correct pagination
  links.on('click', function(e) {
    e.preventDefault();

    var screenWidth = window.screen.width;
    var sectionWidth = $('.images').get(0).scrollWidth;
    var sectionOffset = $('.horizontal-scroll').offset().left;

    links.removeClass('active');
    $(this).addClass('active');
    
    targetHash = this.hash;
    var target = $(targetHash);
    var targetOffset = target.offset().left - sectionOffset;

    $('.horizontal-scroll').stop().animate({
      scrollLeft: '+=' + targetOffset
    }, 500);
    return false;


  });

};

