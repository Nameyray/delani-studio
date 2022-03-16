$(document).ready(function(){  
  $(".clickable").click(function(){
   $(".one").toggle();
   $(".two").toggle();
   $(".three").toggle();
  });
  $(".one").click(function(){
    $("img#one").toggle();
    $("p#p1").toggle();
  })
  $(".two").click(function(){
    $("img#two").toggle();
    $("p#p2").toggle();
  })
  $(".three").click(function(){
    $("img#three").toggle();
    $("p#p3").toggle();
  })
});
$(document).ready(function(){
  $("portfolio").hover(function(){
    $(img)("background-color", "white");
    }, function(){
    $(img)("background-color", "white");
  });
});










 