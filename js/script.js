$(document).ready(function(){
  // what we do section
  $(".design").click(function(){
    $(".design img").slideToggle(1000)
    $("#design-text").slideToggle(1000)
  });

  $(".dev").click(function(){
    $(".dev img").slideToggle(1000)
    $("#dev-text").slideToggle(1000)
  });

  $(".pm").click(function(){
    $(".pm img").slideToggle(1000)
    $("#pm-text").slideToggle(1000)
  });

  // image hovers

  $(".image").mouseover(function(){
    $(".txt-hide").show()
  }).mouseout(function(){
    $(".txt-hide").hide();
  });

  $(".image1").mouseover(function(){
    $(".txt-hide1").show()
  }).mouseout(function(){
    $(".txt-hide1").hide();
  });

  $(".image2").mouseover(function(){
    $(".txt-hide2").show()
  }).mouseout(function(){
    $(".txt-hide2").hide();
  });

  $(".image3").mouseover(function(){
    $(".txt-hide3").show()
  }).mouseout(function(){
    $(".txt-hide3").hide();
  });

  $(".image4").mouseover(function(){
    $(".txt-hide4").show()
  }).mouseout(function(){
    $(".txt-hide4").hide();
  });

  $(".image5").mouseover(function(){
    $(".txt-hide5").show()
  }).mouseout(function(){
    $(".txt-hide5").hide();
  });

  $(".image6").mouseover(function(){
    $(".txt-hide6").show()
  }).mouseout(function(){
    $(".txt-hide6").hide();
  });

  $(".image7").mouseover(function(){
    $(".txt-hide7").show()
  }).mouseout(function(){
    $(".txt-hide7").hide();
  });
});