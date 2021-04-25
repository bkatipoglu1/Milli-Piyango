window.onload = function () {
 $("#btn").click(function(){
    
    function sayiUret(){
      return Math.round(Math.random()*9);
    }

    $(".c1").hide().css({
        "background-color":"rgb(62, 163, 96)",
        "color":"white"});
        $("#dis").css({
            "background-color":"white"
        });

     $("#div1").html(sayiUret()).slideDown(1000);
     $("#div2").html(sayiUret()).slideDown(2000);
     $("#div3").html(sayiUret()).slideDown(3000);
     $("#div4").html(sayiUret()).slideDown(4000);
     $("#div5").html(sayiUret()).slideDown(5000);
     $("#div6").html(sayiUret()).slideDown(6000);
     $("#div7").html(sayiUret()).slideDown(7000);

     setTimeout(function(){
         $(".c1").fadeOut(1000, function(){
             $(this).fadeIn(1000, function(){
                 $(this).fadeOut(1000, function(){
                     $(this).fadeIn(1000);
                   });
               });
           });
       },7000);
 });
}