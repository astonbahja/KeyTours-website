const swiper = new Swiper(".swiper",{
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,
    

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
    320: {
        slidesPerView: 1,
    },

    400: {
        slidesPerView: 2,
    },

    640: {
        slidesPerView: 3,
    }
  },

});

const swiper3 = new Swiper(".swiper3",{
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,
    

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
    320: {
        slidesPerView: 1,
    },

    768: {
        slidesPerView: 2,
    },

    968: {
        slidesPerView: 2,
    }
  },

});

const swiper4 = new Swiper(".swiper4",{
    slidesPerView: 2,
    spaceBetween: 95,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,
    

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
    320: {
        slidesPerView: 1,
    },

    768: {
        slidesPerView: 1,
    },

    968: {
        slidesPerView: 1,
    }
  },

});



/*const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});*/

