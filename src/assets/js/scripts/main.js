const slide_thumb = new Swiper("#thumb-slide", {
    slidesPerView: 5,
    direction: "vertical",
    spaceBetween: 20,
    watchSlidesProgress: true
});

const slide_hero = new Swiper("#main-slide", {
    effect: "fade",
    thumbs: {
        swiper: slide_thumb
    },
    autoPlay: {
        delay: 5000,
        disableOnInteraction: false
    }
});