$( function() {
    $( ".bedparts" ).draggable();
  } );

$( ".bedparts" ).draggable({
  stack: ".bedparts"
});


$('.button').click(function(){
    $('#yes').toggle();
     });


$('.button2').click(function(){
    $('#draggable').toggle();
     });

var countDownDate = new Date("Feb 22, 2019 21:39:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);