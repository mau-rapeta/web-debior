

$(document).ready(function() {

    //// Slick setup ////
    // Slider 1
    $(".slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesTosSlide: 1,
        customPaging: (slider, i) => {
            return '<span class="slider__paging"></span>';
        },
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Slider-2
    $('.slider-2').slick({
        dots: false,
        arrows: true,
        prevArrow: $('.slider-2__prev'),
        nextArrow: $('.slider-2__next'),
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToSlide: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToSlide: 1
                }
            }
        ]
    });

    // Slider-2
    $('.slider-3').slick({
        dots: false,
        arrows: true,
        prevArrow: $('.slider-3__prev'),
        nextArrow: $('.slider-3__next'),
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToSlide: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToSlide: 1
                }
            }
        ]
    });

    // Scroll smooth 
    $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    // Nav color change
    var top1 = $("#nosotros").offset().top;
    var top2 = $("#productos").offset().top - 500;
    var top3 = $("#infraestructura").offset().top - 500;

    $(document).scroll(function() {
        var primary = '#003C55';
        var tertiary = '#C8FF00';
        var scrollPos = $(document).scrollTop();
        if(scrollPos >= top1 && scrollPos < top2) {
            $('.navigation__link').css('color', tertiary);
            $('.navigation__link').removeClass('blue');
        }else if(scrollPos >= top2 && scrollPos < top3) {
            $('.navigation__link').css('color', primary);
            $('.navigation__link').addClass('blue');
        }else if(scrollPos >= top3) {
            $('.navigation__link').css('color', tertiary);
            $('.navigation__link').removeClass('blue');
        }
    }); 

    // Logo color change
    var top2_logo = $("#productos").offset().top - 100;
    var top3_logo = $("#infraestructura").offset().top - 100;

    $(document).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if(scrollPos >= top1 && scrollPos < top2_logo) {
            $('.header__logo-link').removeClass('blue');
        }else if(scrollPos >= top2_logo && scrollPos < top3_logo) {
            $('.header__logo-link').addClass('blue');
        }else if(scrollPos >= top3_logo) {
            $('.header__logo-link').removeClass('blue');
        }
    }); 

    // Nav-mobile functionality
    var toggle = 1;
    $('#navi-toggle').click(function() {
        if(toggle == 1) {
            $('.nav-mobile__icon').addClass('checked');
            $('.nav-mobile__background').css('left', '0');
            $('#nav-icon').attr('src', '\img/icono-cerrar.svg');
            toggle = 0;
        }else {
            toggle = 1;
            $('.nav-mobile__icon').removeClass('checked');
            $('.nav-mobile__background').css('left', '-100%');
            $('#nav-icon').attr('src', '\img/icono-menu.svg');
        }
    });

    $('.nav-mobile__link').click(function() {
        toggle = 1;
        $('.nav-mobile__icon').removeClass('checked');
        $('.nav-mobile__background').css('left', '-100%');
        $('#nav-icon').attr('src', '\img/icono-menu.svg');
    });
    
}); 


