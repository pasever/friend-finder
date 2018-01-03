//$("input[name='optradio1']:checked").val();
alert("Hello World!");
console.log("Hello world");

const friends = require("../data/friends.js");

$("#submit").on("click", function() {
  alert("Hello World!");

  let newUser = {
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

  $.ajax({
    type: "POST",
    url: '/api/friends',
    data: newUser,
    success: function() {

      console.log("Updated");
      //location.redirect("/");

    },
    error: function() {
      console.log("err");
    }
  });

});