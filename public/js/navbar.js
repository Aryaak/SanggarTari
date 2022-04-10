// When the user scrolls the page, execute myFunction
const navs = Array.from(document.getElementsByClassName('nav-link'));
window.onscroll = function () {
    stickyNav();
    $('.section').each(function () {
        if ($(this).position().top - 100 <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
            let activeNav = document.getElementsByClassName($(this).attr('id') + '-link')[0];
            navs.forEach(function (nav) {
                nav.classList.remove('nav-active');
            })

            activeNav.classList.add('nav-active');
        }
    });
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky")
        scrollButton.style.display = 'block'
    } else {
        navbar.classList.remove("sticky");
        scrollButton.style.display = 'hidden'
    }
}

function goToByScroll(id) {
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, 'fast');

}
var scrollButton = document.getElementById('scroll-btn');

function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
}
