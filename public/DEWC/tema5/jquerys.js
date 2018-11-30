$(function(){


  $("#ambas").click(function(){
    $("#panelAux").slideToggle("fast");
    $("#panelAux2").slideToggle("fast");
    $("#panelAux3").slideToggle("fast");
  });

  $("#ambas2").click(function(){
    $("#panel").slideToggle("fast");
    $("#panel2").slideToggle("fast");
    $("#panel3").slideToggle("fast");

  });

  $(".paneles2").click(function(){
    $("#sub2").animate({width: "toggle", display: "inline"
    });
  });
  $(".paneles1").click(function(){
    $("#sub1").animate({width: "toggle", display: "inline"
    });
  });
});
