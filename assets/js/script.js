$(document).ready(function() {
  // navber icon close
  $(".navbar-toggler").click(function () { 
    $(this).toggleClass("close");
  });

  // oppen Account
  $(".sigNIn").click(function(){
    $(".account").addClass("active");
  })

  $(".accountClose").click(function(){
    $(".account").removeClass("active");
  })

  // oppen search
  $("#searchBtn").click(function(){
    $("#search").css({"top":"0%"})
  })

  $("#iconSearch").click(function(){
    $("#search").css({"top":"-400%"})
  })

})