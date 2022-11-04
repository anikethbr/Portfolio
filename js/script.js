$(document).ready(function() {
    var typed = new Typed(".typing", {
        strings: ["Web Developer","Programmer","Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
$( ".d-l-btn" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $(".d-l-btn i").removeClass( "fa fa-solid fa-sun" );
        $(".d-l-btn i").addClass( "fa fa-solid fa-moon" );
        $("nav").addClass("bg-light");
        location.reload();
    } else {
        $(".d-l-btn i").removeClass( "fa fa-solid fa-moon" );
        $(".d-l-btn i").addClass( "fa fa-solid fa-sun" );
        $( "body" ).addClass( "dark" );
        $("nav").removeClass("bg-light");
        $("nav").css("background-color", "#121212");
        $(".navbar-name").css("color", "#fff");
        $(".navbar-name-segment").css("color", "#c06eff ");
        $(".nav-link").css("color", "#fff");
        $(".name").css("color", "#c06eff");
        $(".typing").css("color", "#c06eff ");
        $("hr").css("border-color", "#c06eff ");
        $(".card").css("background-color", "#121212");
        $(".res-txt").css("color", "white");
        $(".progress-bar").css("background-color","#c06eff ");
        $("p").css("color", "white");
        $("h1").css("color", "#c06eff");
        $(".introduce").css("color", "#fff");
        $("h2").css("color", "white");
        $("h3").css("color", "white ");
        $("li").css("color", "white");
        $("i").css("color", "white");
        $("i").css("border-color", "white");
        $(".card2").css("border-color", "rgb(94, 0, 217)");
        $("footer").css("background-color","#1d0033");

    }
});
function getDate(){
    return new Date().getFullYear();
}
