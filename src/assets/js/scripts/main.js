const slide_thumb = new Swiper("#thumb-slide", {
    slidesPerView: 5,
    direction: "vertical",
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: "horizontal"
        },
        991: {
            direction: "vertical"
        }
    }
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
{
    const loginButton = document.getElementById("login-button");
    const modalCloseButton = document.getElementById("modal-close-button");
    const loginModal = document.getElementById("login-modal");

    function toggleModal(event) {
        event.preventDefault();
        loginModal.classList.toggle("active");
    }

    loginButton.addEventListener("click", toggleModal);
    modalCloseButton.addEventListener("click", toggleModal);
}
{
    const navGamesDrop = document.getElementById("nav-games-drop");
    const gamesMenu = document.getElementById("games-menu");
    const header = document.querySelector("header");
    
    navGamesDrop.addEventListener("click", () => {
        header.classList.toggle("menu-active");
        gamesMenu.classList.toggle("active");
    });
}