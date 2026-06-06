$('.package-slider').slick({
  dots: true,
  infinite: false,
  arrows: false,
  // prevArrow:'.my-custom-prev',
  // nextArrow:'.my-custom-next',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.testimonial-slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});



// to close menu after clicking a link
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// to stop scrolling while menu is open
const navbar = document.querySelector('.navbar-collapse');

navbar.addEventListener('show.bs.collapse', () => {
  document.body.style.overflow = 'hidden';
});

navbar.addEventListener('hide.bs.collapse', () => {
  document.body.style.overflow = 'auto';
});



// FOR PLAYING ABOUT VIDEO

// const videoBox = document.getElementById('videoBox');

// videoBox.addEventListener('click', () => {
//   videoBox.innerHTML = `
//     <iframe width="100%" height="100%" 
//       src="https://www.youtube.com/embed/Pkv5_sfabVA?autoplay=1" 
//       title="About Video"
//       frameborder="0"
//       allow="autoplay; encrypted-media"
//       allowfullscreen>
//     </iframe>
//   `;
// });
const videoBox = document.getElementById("videoBox");

videoBox.addEventListener("click", function () {
  if (!this.classList.contains("active")) {
    this.classList.add("active");

    this.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/Pkv5_sfabVA?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `;
  }
});


function resetVideo() {
  videoBox.classList.remove("active");

  videoBox.innerHTML = `
    <img src="./assets/images/about-us-img.jpg" alt="">
    <span class="play-btn"><i class="fa-solid fa-play"></i></span>
  `;
}
