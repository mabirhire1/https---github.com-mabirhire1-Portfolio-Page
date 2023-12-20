const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    direction: 'horizontal',

    //keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    //mousewheel
    mousewheel: {
      invert: true,
    },

    loop: true,
    //autp play
   autoplay: {
     delay: 2000,
   },
  
   
    //  breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
  
      //when the window width is >=1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  
      //when the window width is >=2560px
      2560: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }, 
  });