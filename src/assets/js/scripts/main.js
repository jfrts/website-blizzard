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

const navGames = document.getElementById("nav-games");
navGames.addEventListener("click", event => {
    const targetFilter = event.target.closest("a");
    if (targetFilter && navGames.contains(targetFilter)) {
        event.preventDefault();
        const allFilters = document.querySelectorAll("#nav-games li a");
        allFilters.forEach(item => item.classList.remove("active"));
        targetFilter.classList.toggle("active");
    }
});