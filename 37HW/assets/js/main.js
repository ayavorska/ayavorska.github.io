function initHeadSlider() {
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
}

function initNewsSwiper() {
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
}

// map

function initMapView() {
  const map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([51.5, -0.09]).addTo(map);
}

//scroll bg

function initHeaderScroll() {
  const SCROLL_TRIGGER = 400;

  window.addEventListener("scroll", function () {
    if (
      window.scrollY >= SCROLL_TRIGGER ||
      window.pageYOffset >= SCROLL_TRIGGER
    ) {
      document.getElementsByTagName("header")[0].classList.add("header--bg");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("header--bg");
    }
  });
}

//scroll

function initAnchorsScroll() {
  const allAnchors = document.querySelectorAll('a[href^="#"]');
  allAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      console.log(href);
      if (href) {
        const targetScrollEl = document.querySelector(href);
        targetScrollEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// validate form

function initFormValidate() {
  const form = document.querySelector("#form");
  const nameInputEl = document.querySelector('#name');
  const emailInputEl = document.querySelector("#email");


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    nameInputEl.classList.remove("error");
    emailInputEl.classList.remove("error");

    
    if (name.trim() === '') {
      nameInputEl.classList.add('error');
      isValid = false;
    }

    if (email.trim() === '') {
      emailInputEl.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted!")
    }
  });
}

initHeadSlider();
initNewsSwiper();
initMapView();
initHeaderScroll();
initAnchorsScroll();
initFormValidate();