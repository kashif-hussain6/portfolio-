/*
===================================
          Table Content
===================================
1.  responsive menu slideing
2.  code for mobile menu 
3.  menu options custom affix
4.  isotope
5.  skill circle progress bar
6.  progress bar
7.  Swiper Slider
    - portfolio-slider
    - testimonial slider
    - blog slider
    - blog slider for home-page-two
    - post-img-slider
    - more-case-slider
    - test-slider
    -
8. Scroll to top
*/


(function($) {
    "use strict";

    // responsive menu slideing
    if ($(window).width() < 992) {
        $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp(500, "linear");
            } else {
                element.addClass("open");
                element.children("ul").slideDown();
                element.siblings("li").children("ul").slideUp();
                element.siblings("li").removeClass("open");
                element.siblings("li").find("li").removeClass("open");
                element.siblings("li").find("ul").slideUp();
            }
        });

    }

    //js code for mobile menu 
    $(".menu-toggle").on("click", function() {
        $(this).toggleClass("is-active");
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin

    $("ul.menu").each(function(i, liList) {
        var $liList = $(liList);

        $liList.on("click", "li a.scroll-smoth", function(event) {
            var $anchor = $(this);
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top - 70
            }, 1500, "easeInOutExpo");
            event.preventDefault();
        });
    });

    //menu options custom affix
    var fixed_top = $(".header-section");
    $(window).on("scroll", function() {

        if ($(this).scrollTop() > 50) {
            fixed_top.addClass("animated fadeInDown menu-fixed");
        } else {
            fixed_top.removeClass("animated fadeInDown menu-fixed");
        }
    });


    $(window).on("load", function() {

        // isotope
        $(".grid").isotope({
            // options
            itemSelector: ".filter-item"
        });
        var $gallery = $(".grid").isotope({
            // options
        });

        // filter items on button click
        $(".portfolio-item-button").on("click", "span", function() {
            var filterValue = $(this).attr("data-filter");
            $gallery.isotope({
                filter: filterValue
            });

        });

        $(".portfolio-item-button").on("click", "span", function() {
            $(this).addClass("active").siblings().removeClass("active");
        });
    });

    $("a[data-rel^=lightcase]").lightcase();

    // skill circle progress bar
    var skillLevel1 = $(".skill-item .first").data("skill-level");
    var skillLevel2 = $(".skill-item .second").data("skill-level");
    var skillLevel3 = $(".skill-item .third").data("skill-level");
    var skillLevel4 = $(".skill-item .fourth").data("skill-level");
    //first.circle
    $(".first.circle").circleProgress({
        value: "0." + skillLevel1,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#39b54a"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(95 * progress) + "<span>%</span>");
    });

    //second.circle
    $(".second.circle").circleProgress({
        value: "0." + skillLevel2,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#f26522"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(skillLevel2 * progress) + "<i>%</i>");
    });

    //third.circle
    $(".third.circle").circleProgress({
        value: "0." + skillLevel3,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#6e41ff"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(70 * progress) + "<span>%</span>");
    });

    //fourth.circle
    $(".fourth.circle").circleProgress({
        value: "0." + skillLevel4,
        size: 110,
        emptyFill: "transparent",
        fill: {
            color: "#ec008c"
        }
    }).on("circle-animation-progress", function(event, progress) {
        $(this).find("strong").html(Math.round(90 * progress) + "<span>%</span>");
    });

    // progress bar
    $(".progressbar").each(function() {
        $(this).find(".bar").animate({
            "width": $(this).attr("data-perc")
        }, 3000);
        $(this).find(".label").animate({
            "left": $(this).attr("data-perc")
        }, 3000);
    });

    //portfolio-slider
    var swiper = new Swiper(".portfolio-slider", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // testimonial slider
    var swiper = new Swiper(".testimonial-slider", {
        effect: "coverflow",
        loop: 0,
        slidesPerView: "auto",
        grabCursor: 1,
        parallax: 0,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: !1
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });

    // blog slider
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1920: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1440: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });

    // blog slider for home-page-two
    var swiper = new Swiper(".blog-slider-two", {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });

    // post-img-slider
    var swiper = new Swiper(".post-img-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1000,
        },
    });

    // more-case-slider
    var swiper = new Swiper(".more-case-slider", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // test-slider
    var swiper = new Swiper(".testi-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
    });

    $(".work-smaple-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".work-smaple-nav"
    });
    $(".work-smaple-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".work-smaple-main",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
    });

    // Show or hide the sticky footer button
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 200) {
            $(".scroll-to-top").fadeIn(200);
        } else {
            $(".scroll-to-top").fadeOut(200);
        }
    });

    // Animate the scroll to top
    $(".scroll-to-top").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });

})(jQuery);