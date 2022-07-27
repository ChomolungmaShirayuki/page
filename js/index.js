//index.js
console.log("test");


$(function () {
	$(".side_menu").on("inview", function () {
        $(this).stop().css("opacity", "1").css("animation", "SlideInRight 1s");
		console.log("test");
    });
});