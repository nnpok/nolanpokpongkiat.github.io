$(document).ready(function() {

  $(".button").click(function() {
    console.log("enter");
  	if(!$(".car").hasClass("move")) {
      console.log("hi");
  	   $(".car").addClass("move");
       console.log("last");
       $("#gmaps").delay(500).fadeIn(1000);
     }
    else{
      console.log("hello");
  	   $(".car").removeClass("move");
       console.log("lastest");
       $("#gmaps").delay(500).fadeOut(1000);
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
