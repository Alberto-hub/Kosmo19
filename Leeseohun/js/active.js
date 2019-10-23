(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#newsboxNav').classyNav();
    }

    // :: 3.0 Newsticker Active Code
    if ($.fn.simpleTicker) {
        $.simpleTicker($("#breakingNewsTicker"), {
            speed: 1000,
            delay: 3000,
            easing: 'swing',
            effectType: 'roll'
        });
    }

    // :: 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-post-slides');
        var videoSlides = $('.video-slides');
        var albumSlides = $('.albums-slideshow');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        videoSlides.owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    // :: 5.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.video-btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // :: 6.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 7.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 8.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#a2a2a2',
            thickness: '3',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#a2a2a2',
            thickness: '3',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#a2a2a2',
            thickness: '3',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#a2a2a2',
            thickness: '3',
            reverse: true
        });
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 10.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 11.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // Get the modal
    var modal = document.getElementById('aboutWebSite');
    var modal1 = document.getElementById('CookeySite');

    // Get the button that opens the modal
    var btn = document.getElementById("aboutWeb");
    var btn1 = document.getElementById("cookey");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];                                          
    var span1 = document.getElementsByClassName("close")[1];                                          
    window.onload = function(){ 
        btn.onclick = function() {
            modal.style.display = "block";
            $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
            $('#element').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
        btn1.onclick = function() {
            modal1.style.display = "block";
            $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
            $('#element').on('scroll touchmove mousewheel' , function(event) { // 터치무브와 마우스휠 스크롤 방지     
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
        span.onclick = function() {
            modal.style.display = "none";
            $('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
            $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
        }
        span1.onclick = function() {
            modal1.style.display = "none";
            $('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
            $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }else if (event.target == modal1) {
                modal1.style.display = "none";
            }   
        }
    };


    $(document).ready(function () { 
        $('head').append('<style type="text/css">.modal .modal-body {max-height: ' + ($('body').height() * .8) + 'px;overflow-y: auto;}.modal-open .modal{overflow-y: hidden !important;}</style>'); 
    });

    // Get the modal
    var modal2 = document.getElementById('myModal1');
    var modal3 = document.getElementById('myModal2');

 
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn1");
    var btn3 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close")[2];                                          
    var span3 = document.getElementsByClassName("close")[3];                                          

    // When the user clicks on the button, open the modal 
    window.onload = function(){ 
        btn2.onclick = function() {
            modal2.style.display = "block";
            $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
            $('#element').on('scroll touchmove mousewheel' , function(event) { // 터치무브와 마우스휠 스크롤 방지     
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
        btn3.onclick = function() {
            modal3.style.display = "block";
            $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
            $('#element').on('scroll touchmove mousewheel' , function(event) { // 터치무브와 마우스휠 스크롤 방지     
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
        }
    window.onload = function(){
        // When the user clicks on <span> (x), close the modal
        span2.onclick = function() {
            $(".modal1").attr("src", './Login_Main.html');
            modal2.style.display = "none";
            $('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
            $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
        }
        span3.onclick = function() {
            $(".modal2").attr("src", './Sign_Up.html');
            modal3.style.display = "none";
            $('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
            $('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
        }
    }
    };
   

})(jQuery);