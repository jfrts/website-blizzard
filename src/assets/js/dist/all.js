"use strict";var slide_thumb=new Swiper("#thumb-slide",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slide_hero=new Swiper("#main-slide",{effect:"fade",thumbs:{swiper:slide_thumb},autoPlay:{delay:5e3,disableOnInteraction:!1}});