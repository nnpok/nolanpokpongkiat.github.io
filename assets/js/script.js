$(document).ready(function() {
 // all your jQuery code goes in here!

 // want to show the corresponding outfit when clicked in selection
 $("#gotts").click(function() {
 	$("#gotts-info").fadeIn(500);
 });

 $("#g-x").click(function() {
 	$("#gotts-info").fadeOut(500);
 });


 $("#hs").click(function() {
 	$("#humphrey-info").fadeIn(500);
 });

 $("#h-x").click(function() {
 	$("#humphrey-info").fadeOut(500);
 });

 $("#fb").click(function() {
 	$("#ferry-info").fadeIn(500);
 });

 $("#f-x").click(function() {
 	$("#ferry-info").fadeOut(500);
 });

 $("#bridge").click(function() {
 	$("#bridge-info").fadeIn(500);
 });

 $("#b-x").click(function() {
 	$("#bridge-info").fadeOut(500);
 });

$("#explora").click(function() {
 	$("#exploratorium-info").fadeIn(500);
 });

 $("#e-x").click(function() {
 	$("#exploratorium-info").fadeOut(500);
 });

 $("#aq").click(function() {
 	$("#aquarium-info").fadeIn(500);
 });

 $("#a-x").click(function() {
 	$("#aquarium-info").fadeOut(500);
 });

 $("#go").click(function() {
 	$("#search").css({top: "0px"});
 	$("#background").show();
 });

 $(".pin-label").click(function() {
 	if($(this).hasClass("not-done") && !$(this).hasClass("clicked-on")) {
 		var newObject = "<div class='coming-soon'>Coming Soon! </div>";
 		$(this).append(newObject);
 		$(this).addClass("clicked-on");

 	} 
 });
});
