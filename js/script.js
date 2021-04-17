$(document).ready(function(){
  // what we do section
  let wwds = ["design", "dev", "pm"];

  wwds.forEach(function(wwd){
    $("." + wwd).click(function(){
      $("."+ wwd +" img").slideToggle()
      $("#"+ wwd +"-text").slideToggle()
    })
  });
  
  // image hovers

  $(".image0").hover(function(){
    $(".txt-hide0").fadeToggle(300)
  });

  $(".image1").hover(function(){
    $(".txt-hide1").fadeToggle(300)
  });

  $(".image2").hover(function(){
    $(".txt-hide2").fadeToggle(300)
  });

  $(".image3").hover(function(){
    $(".txt-hide3").fadeToggle(300)
  });

  $(".image4").hover(function(){
    $(".txt-hide4").fadeToggle(300)
  });

  $(".image5").hover(function(){
    $(".txt-hide5").fadeToggle(300)
  });

  $(".image6").hover(function(){
    $(".txt-hide6").fadeToggle(300)
  });

  $(".image7").hover(function(){
    $(".txt-hide7").fadeToggle(300)
  });

  
});