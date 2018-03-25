console.log('hi');
$("#yes").click(function (){
  $("#R").append("really ");
});


$("#Send").click(function(e){
  e.preventDefault();
  
  var comment = $("#comment").val();
  $("#R").text("comment");
  
  window.open('https://twitter.com/intent/tweet?text=' + comment);
  
});


  $("#TrumpDid-2").hide();
$("#swap").click(function(){
  $("#TrumpDid-1").toggle();
  $("#TrumpDid-2").fadeToggle();
});

// $("#comment").click(function(){
//   $("#TrumpDid-1").toggle();
//   $("#TrumpDid-2").fadeToggle();
// });