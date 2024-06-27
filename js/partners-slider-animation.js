var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false, 
    speed: 5000, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1500, 
        disableOnInteraction: false,
    },
    allowTouchMove: true, 
    loopAdditionalSlides: 3, 
});
