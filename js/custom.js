/* add/remove class */
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50){
      $(".header").addClass("test");
    } else {
      $(".header").removeClass("test");
    }
  });
});

/* scroll to top */
$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.button').fadeIn();
      } else {
          $('.button').fadeOut();
      }
  });
  //Click event to scroll to top
  $('.button').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});