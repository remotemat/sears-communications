$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('nav').css('background','#4995E8');
} else {
$('nav').css('background','transparent');
}
});