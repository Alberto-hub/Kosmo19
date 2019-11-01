var slideIndex = 1; {
    showSlides1(slideIndex);
    showSlides2(slideIndex);
    showSlides3(slideIndex);
    showSlides4(slideIndex);
    // showSlides5(slideIndex);
}

function plusSlides(n) {
    showSlides1(slideIndex += n);
    showSlides2(slideIndex += n);
    showSlides3(slideIndex += n);
    showSlides4(slideIndex += n);
    // showSlides5(slideIndex += n);
}

function currentSlide(n) {
    showSlides1(slideIndex = n);
    showSlides2(slideIndex = n);
    showSlides3(slideIndex = n);
    showSlides4(slideIndex = n);
    // showSlides5(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("trf_slide");
  if (n > slides1.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  slides1[slideIndex-1].style.display = "block";  
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("food_slide");
    if (n > slides2.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    slides2[slideIndex-1].style.display = "block";  
}


function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("fst_slide");
    if (n > slides3.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    slides3[slideIndex-1].style.display = "block";  
}

function showSlides4(n) {
    var i;
    var slides4 = document.getElementsByClassName("ntr_slide");
    if (n > slides4.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides4.length}
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";  
    }
    slides4[slideIndex-1].style.display = "block";  
}

// function showSlides5(n) {
//     var i;
//     var slides5 = document.getElementsByClassName("ntr_slide");
//     if (n > slides5.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides5.length}
//     for (i = 0; i < slides5.length; i++) {
//         slides5[i].style.display = "none";  
//     }
//     slides5[slideIndex-1].style.display = "block";  
// }


// Top 이동 버튼
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// 스크롤이 맨 아래에 위치 할 시 버튼 위치 변경
$(window).scroll(function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $(".top").css("bottom", 177);
    } else {
        $(".top").css("bottom", 0);
    }
});

// 화면 가로크기에따라 변경
$(window).resize(function () {
    if ($(window).width() < 800) {
        $('.top').show();
    } else {
        $('.top').hide();
    }
});