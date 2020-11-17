$(document).ready(function(){
  $(window).scroll(function() {
    $(".fixed-top").addClass("navbar-dark");
    if ($(document).scrollTop() > 50) { 
      $(".fixed-top").removeClass("navbar-dark");
      $(".fixed-top").addClass("navbar-light");
      $(".fixed-top").addClass("nav-fixed-top");
    } else {
      $(".fixed-top").removeClass("nav-fixed-top");
      $(".fixed-top").removeClass("navbar-light");
      $(".fixed-top").addClass("navbar-dark");
    }
  });

  // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});


