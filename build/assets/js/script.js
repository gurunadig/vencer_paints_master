$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
 
 // breakpoint and up  
 $(window).resize(function(){
   if ($(window).width() >= 1920){	
 
       // when you hover a toggle show its dropdown menu
       $(".navbar .dropdown-toggle").hover(function () {
          $(this).parent().toggleClass("show");
          $(this).parent().find(".dropdown-menu").toggleClass("show"); 
        });
 
         // hide the menu when the mouse leaves the dropdown
       $( ".navbar .dropdown-menu" ).mouseleave(function() {
         $(this).removeClass("show");  
       });
   
     // do something here
   }	
 });  
   
   
 
 // document ready  
 });



const one = document.getElementById("arrow_action_vencer_product");
one.classList.toggle("arrow_down");
const color = document.getElementById("arrow_action_vencer_color");
color.classList.toggle("arrow_down");

$('#one').on('show.bs.dropdown', function () {
  one.classList.remove("arrow_down");
one.classList.toggle("arrow_up");    
})
$('#one').on('hide.bs.dropdown', function () {
    one.classList.remove("arrow_up");    
    one.classList.toggle("arrow_down");
})



$('#color').on('show.bs.dropdown', function () {
  color.classList.remove("arrow_down_color");
color.classList.toggle("arrow_up_color");    
})
$('#color').on('hide.bs.dropdown', function () {
    color.classList.remove("arrow_up_color");    
    color.classList.toggle("arrow_down_color");
})

// tooltip function
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});





