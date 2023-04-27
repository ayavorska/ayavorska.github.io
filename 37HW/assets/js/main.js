const headSwiper = new Swiper(".head__swiper", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});
const newsSwiper = new Swiper(".news__slider", {
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: ".news__pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
  },
});

const btnLeft = document.getElementById("btn-left");
btnLeft.addEventListener("click", () => {
  newsSwiper.slidePrev();
});

const btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", () => {
  newsSwiper.slideNext();
});

// map

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
