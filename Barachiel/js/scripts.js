/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const hospitals = ["bệnh viện chợ rẫy", "bệnh viện bạch mai", "bệnh viện nhi trung ương", "bệnh viện nhiệt đới"];

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// danh sách bệnh viện
// var hospitals = ['bệnh viện chợ rẫy', 'bệnh viện bạch mai', 'bệnh viện nhi trung ương', 'bệnh viện nhiệt đới'];
function mySearch() {
    var result = document.getElementById("myInput").value;
    var index = hospitals.indexOf(result.toLowerCase(),0);
    if(index == -1){
        document.getElementById("search").innerHTML = "Rất tiếc, chúng tôi không tìm thấy tên bệnh viện này";
    }
    else{
        document.getElementById("search").innerHTML = '<br/><br/><br/> <div class="search-container justify-content-center input-group "><ul class = "ulHouse"><li class = "liHouse" onclick = "myHouseDetail()">Chung cư Hòa Hoa, quận Bình Thạnh, tp. Hồ Chí Minh</li></br/><li  class = "liHouse" onclick = "myHouseDetail()">Số 10, đường Lê Đại Hành, phường X, tp. Hồ Chí Minh</li></ul></div>'
    }
}

// xem chi tiết nhà
function myHouseDetail(){
    window.location.href = "chitietnha.html";
}