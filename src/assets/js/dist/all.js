"use strict";var slide_thumb=new Swiper("#thumb-slide",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slide_hero=new Swiper("#main-slide",{effect:"fade",thumbs:{swiper:slide_thumb},autoPlay:{delay:5e3,disableOnInteraction:!1}}),navGames=document.getElementById("nav-games"),toggleModal=(navGames.addEventListener("click",function(e){var t=e.target.closest("a");t&&navGames.contains(t)&&(e.preventDefault(),document.querySelectorAll("#nav-games li a").forEach(function(e){return e.classList.remove("active")}),t.classList.toggle("active"))}),function(e){e.preventDefault(),loginModal.classList.toggle("active")}),loginButton=document.getElementById("login-button"),modalCloseButton=document.getElementById("modal-close-button"),loginModal=document.getElementById("login-modal"),navGamesDrop=(loginButton.addEventListener("click",toggleModal),modalCloseButton.addEventListener("click",toggleModal),document.getElementById("nav-games-drop")),gamesMenu=document.getElementById("games-menu"),header=document.querySelector("header");navGamesDrop.addEventListener("click",function(){header.classList.toggle("menu-active"),gamesMenu.classList.toggle("active")});