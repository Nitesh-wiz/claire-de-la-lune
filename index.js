const navitem = document.querySelector(".nav-item");
$(".nav-item").hover(function() {
    (this).querySelector(".nav-link").style.transition = `0.8s ease`;
    (this).querySelector(".nav-link").style.transform = `rotateX(360deg)`;
    (this).querySelector(".nav-link").style.color = `rgba(0,0,0,0.6)`;

}, function() {
    (this).querySelector(".nav-link").style.transition = `0.8s ease`;
    (this).querySelector(".nav-link").style.transform = `rotateX(0deg)`;
    (this).querySelector(".nav-link").style.color = ` rgba(0,0,0,1)`;
});
$(document).ready(function() {
    $("#hamburg").click(function() {
        $("#hamburgcont").slideToggle("slow");

    });
});