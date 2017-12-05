//$("input[name='optradio1']:checked").val();

$("#submit").on("click", function() {
  alert("Hello World!");
  
  
  
  var newUser = {
    name: $("#userName").val(),
    photo: $("#userPhoto").val(),
    answers: [
      $("input[name='optradio1']:checked").val(),
      $("input[name='optradio2']:checked").val(),
      $("input[name='optradio3']:checked").val(),
      $("input[name='optradio4']:checked").val(),
      $("input[name='optradio5']:checked").val(),
      $("input[name='optradio6']:checked").val(),
      $("input[name='optradio7']:checked").val(),
      $("input[name='optradio8']:checked").val(),
      $("input[name='optradio9']:checked").val(),
      $("input[name='optradio10']:checked").val()
    ]
  };  
});