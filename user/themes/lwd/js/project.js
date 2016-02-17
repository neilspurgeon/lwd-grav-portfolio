$(document).ready(function() {
  imgPagination();
}); 

var imgPagination = function() {
  var links     = $('.pagination a'),
      firstLink = $('.pagination a:first');

  firstLink.addClass('active');

  links.on('click', function() {

    links.removeClass('active');
    $(this).addClass('active');
  });

};

