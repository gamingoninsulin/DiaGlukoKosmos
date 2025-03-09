document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('responsive');
    });

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 6000);
    }

    // Optional: Manual Navigation
    function plusSlides(n) {
        clearTimeout(slideTimer);
        showSlidesManually(slideIndex += n);
    }

    function showSlidesManually(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slideTimer = setTimeout(showSlides, 3000);
    }

    // Optional: Current Slide Indicator
    function currentSlide(n) {
        clearTimeout(slideTimer);
        showSlidesManually(slideIndex = n);
    }
});