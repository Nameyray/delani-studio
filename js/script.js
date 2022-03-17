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


$("#inputname"). submit(function(event){
  alert(inputName + "we have received your message. Thank you for reaching out to us.")
  event.preventDefault();
});
  
  
    $(".work1").hover(function () {
      $("#p1").toggle()
    });
    $(".work2").hover(function () {
      $("#p2").toggle()
    });
    $(".work3").hover(function () {
      $("#p3").toggle()
    });
    $(".work4").hover(function () {
      $("#p4").toggle()
    });
    $(".work5").hover(function () {
      $("#p5").toggle()
    });
    $(".work6").hover(function () {
      $("#p6").toggle()
    });
    $(".work7").hover(function () {
      $("#p7").toggle()
    });
    $(".work8").hover(function () {
      $("#p8").toggle()
    });
  
  
  });
  