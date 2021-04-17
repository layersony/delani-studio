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

$(document).ready(function(){
  $("#contactus form").submit(function(event){
    let fName = $("input.uname").val();
    let email = $("input.email").val();
    let textarea = $("textarea#comment").val();
    if (fName && email && textarea){
      alert(fName + ', We have received your message. Thank you for reaching out to us.')
    }else{
      alert("Please Do enter the required Details")
    };

    // mailchimp code

    (function($) {
      window.fnames = new Array(); 
      window.ftypes = new Array();
      fnames[0]='EMAIL';
      ftypes[0]='email';
      fnames[1]='FNAME';
      ftypes[1]='text';
      }
      (jQuery));
      var $mcj = jQuery.noConflict(true);
  });
})