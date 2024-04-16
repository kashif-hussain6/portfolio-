// Responsive menu sliding
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 992) {
        document.querySelectorAll('.navbar-collapse > ul > li > a, .navbar-collapse ul.sub-menu > li > a').forEach(function(element) {
            element.addEventListener('click', function() {
                var parentLi = this.parentNode;
                if (parentLi.classList.contains('open')) {
                    parentLi.classList.remove('open');
                    parentLi.querySelectorAll('li').forEach(function(li) {
                        li.classList.remove('open');
                    });
                    parentLi.querySelectorAll('ul').forEach(function(ul) {
                        ul.style.display = 'none';
                    });
                } else {
                    parentLi.classList.add('open');
                    parentLi.children('ul').style.display = 'block';
                    parentLi.siblings('li').children('ul').style.display = 'none';
                    parentLi.siblings('li').classList.remove('open');
                    parentLi.siblings('li').querySelectorAll('li').forEach(function(li) {
                        li.classList.remove('open');
                    });
                    parentLi.siblings('li').querySelectorAll('ul').forEach(function(ul) {
                        ul.style.display = 'none';
                    });
                }
            });
        });
    }

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        this.classList.toggle('is-active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('ul.menu a.scroll-smooth').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        var topOffset = 70; // Adjust this value based on your fixed header height or other offsets
        window.scrollTo({
            top: target.offsetTop - topOffset,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.grid');
    var iso = new Isotope(grid, {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress-circle').forEach(function(pc) {
        var val = parseInt(pc.dataset.progress);
        var r = pc.getAttribute('r');
        var c = Math.PI * (r * 2);

        // Set the stroke length
        if (val < 0) { val = 0; }
        if (val > 100) { val = 100; }
        var pct = ((100 - val) / 100) * c;

        pc.style.strokeDasharray = c;
        pc.style.strokeDashoffset = pct;
    });
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-section');
    var scrollDistance = window.scrollY;
    if (scrollDistance > 50) {
        header.classList.add('menu-fixed', 'animated', 'fadeInDown');
    } else {
        header.classList.remove('menu-fixed', 'animated', 'fadeInDown');
    }
});
// Vanilla JS equivalent of jQuery's isotope initialization
document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.grid');
    var iso = new Isotope(grid, {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows'
    });
});

// Vanilla JS for initializing circle progress bars
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress-circle').forEach(function(pc) {
        var val = parseInt(pc.dataset.progress);
        var r = pc.getAttribute('r');
        var c = Math.PI * (r * 2);

        // Set the stroke length
        if (val < 0) { val = 0; }
        if (val > 100) { val = 100; }
        var pct = ((100 - val) / 100) * c;

        pc.style.strokeDasharray = c;
        pc.style.strokeDashoffset = pct;
    });
});

// Vanilla JS for affixing the menu on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-section');
    var scrollDistance = window.scrollY;
    if (scrollDistance > 50) {
        header.classList.add('menu-fixed', 'animated', 'fadeInDown');
    } else {
        header.classList.remove('menu-fixed', 'animated', 'fadeInDown');
    }
});

// Vanilla JS for initializing Swiper sliders
document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
});

// Vanilla JS for scroll to top functionality
var scrollTopButton = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
scrollTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});