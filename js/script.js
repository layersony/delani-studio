$(document).ready(function(){
  // what we do section
  $(".design").click(function(){
    $(".design img").toggle()
    $("#design-text").toggle()
  });

  $(".dev").click(function(){
    $(".dev img").toggle()
    $("#dev-text").toggle()
  });

  $(".pm").click(function(){
    $(".pm img").toggle()
    $("#pm-text").toggle()
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