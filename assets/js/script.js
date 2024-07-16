const preloader = document.querySelector(".preloader");
const content = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const lightDark = document.querySelector('.dark-btn');
const toTop = document.querySelector(".go-to-top")
const icon = document.getElementsByClassName("bi bi-brightness-high")[0];

document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Mobile nav toggle
     */

    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
    })
    });

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);

        if (!section) return;

        navbarlink.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });
    });

    /**
     * Toggle mobile nav dropdowns
     */

    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
            event.preventDefault();
            this.classList.toggle('active');
        }
    })});

    /**
     * Initiate glightbox
     */

    const glightbox = GLightbox({
    selector: '.glightbox'
    });

    /**
     * Initiate pURE cOUNTER
     */

    new PureCounter();

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
    AOS.init({
        duration: 800,
        easing: 'slide',
        once: true,
        mirror: false
    });
    }

    window.addEventListener('load', () => {
        aos_init();
    });
});

/**
 * Light/Dark Mode Function
 */

lightDark.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        icon.className = "bi bi-moon";
        document.querySelector(".hero img").src = "/assets/img/bg01.jpg";
    } else {
        icon.className = "bi bi-brightness-high";
        document.querySelector(".hero img").src = "/assets/img/bg02.jpg";
    }
};

/**
 * Simulate loading delay
 */

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 5000);
});

/**
 * Back to top
 */ 

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 150) {
    toTop.classList.add('active');
    } 
    else {
    toTop.classList.remove('active');
    }
});

/**
 * Cursor Tracker
 */

document.onmousemove = function(e) {
    cursor.style.left = (e.pageX - 10) + "px";
    cursor.style.top = (e.pageY - 10) + "px";
    cursor.style.display = "block"
}

