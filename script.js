/* parallax */
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 5 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  //about
  if (wScroll > $(".about").offset().top - 300) {
    $(".about .pLeft, .about .pRight").addClass("show");
    // console.log("ok");
  }

  //projects
  if (wScroll > $(".projects").offset().top - 300) {
    $(".projects .card").each(function (i) {
      setTimeout(function () {
        $(".projects .card").eq(i).addClass("show");
      }, 100 * i /*(i + 1)*/);
    });
  }
});
