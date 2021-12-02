var navbar = document.querySelector('nav')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

$(document).ready(function () {
    $(window).on("scroll", function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() >= 10) {
            // set to new image
            $(".navbar-brand img").attr("src", "https://ditechcdm.github.io/furry-rotary-phone.github.io/Logo-Black.png");
        } else {
            //back to default
            $(".navbar-brand img").attr("src", "https://ditechcdm.github.io/furry-rotary-phone.github.io/Logo.png");
        }
    })
});
