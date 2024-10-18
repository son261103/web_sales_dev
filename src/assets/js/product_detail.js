document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize Swiper instances
    function initializeSwipers() {
      // Initialize main product image swiper
      const mainSwiper = new Swiper('.main-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        autoHeight: true,
        on: {
          init: function() {
            console.log('Main swiper initialized');
          },
        },
      });
  
      // Initialize thumbnail swiper
      const thumbnailSwiper = new Swiper('.thumbnail-swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        watchOverflow: true,
        slideToClickedSlide: true,
        breakpoints: {
          320: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 5,
          },
        },
        on: {
          init: function() {
            console.log('Thumbnail swiper initialized');
          },
        },
      });
  
      // Sync thumbnail clicks with the main swiper
      if (thumbnailSwiper && mainSwiper) {
        thumbnailSwiper.on('click', function() {
          const clickedIndex = thumbnailSwiper.clickedIndex;
          if (clickedIndex !== undefined && mainSwiper.slides.length > 0) {
            mainSwiper.slideToLoop(clickedIndex, 300);
          }
        });
  
        // Update thumbnail swiper when main swiper changes
        mainSwiper.on('slideChange', function() {
          const activeIndex = mainSwiper.realIndex;
          if (thumbnailSwiper.slides.length > activeIndex) {
            thumbnailSwiper.slideTo(activeIndex);
          }
        });
      }
    }
  
    // Call the initialization function
    initializeSwipers();
  
    // Reinitialize on window resize (optional, for responsiveness)
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initializeSwipers, 250);
    });
  });