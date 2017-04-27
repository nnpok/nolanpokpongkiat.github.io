$(document).ready(function() {

  $(".bigbox").click(function() {
  	if(!$(this).hasClass("bigbox-active")) {
      console.log("hi");
  		$(this).addClass("bigbox-active");
    }
    else {
      $(this).removeClass("bigbox-active");
      console.log("enter");
      console.log($(this).parent()[0]);
    }
    });

  // $(".close").click(function() {
  // 	if($(".bigbox").hasClass("bigbox-active")) {
  //     console.log("enter");
  // 		$(this).parent().removeClass("bigbox-active");
  //     console.log($(this).parent()[0]);
  //
  //   }
  //
  //   });


});
