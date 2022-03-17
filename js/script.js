

$(document).ready(function() {
  $('.content-select1').click(function() {
    $('.content-show1').toggle("slide");
  });
  $('.content-select2').click(function() {
    $('.content-show2').toggle("slide");
  });
  $('.content-select3').click(function() {
    $('.content-show3').toggle("slide");
  });
});
$(document).ready(function(){
  var inputName=document.getElementById("inputname");
  $("form").submit(function(){
    alert(inputName + "we have received your message. Thank you for reaching out to us");
   });
})

$(document).ready(function(){
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp1').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp1').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp2').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp2').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp3').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp3').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp4').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp4').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp5').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp5').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp6').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp6').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp7').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp7').fadeOut(300);
  })
  $('.image-text').hover(function(){
    $(this).stop().animate({"opacity": 0.5});
    $(this).find('.pp8').fadeIn(300);
  }, function() {
    $(this).stop().animate({"opacity": 1});
    $(this).find('.pp8').fadeOut(300);
  })
})
