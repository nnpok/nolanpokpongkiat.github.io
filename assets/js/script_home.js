$(document).ready(function() {

  $('#carousel-next').click(function() {
    var margLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margLeft == -3992) {
      return false;
    } else {
      $("#carousel").css("margin-left", margLeft - 1000);
    }
  })
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $('#carousel-prev').click(function() {
    var margLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margLeft == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", margLeft + 1000);
    }
  })

});
