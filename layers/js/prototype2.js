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

