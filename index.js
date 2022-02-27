const btns = document.getElementsByClassName("social-btn");
const btnsArray = Array.from(btns);
const isSmallScreen = window.matchMedia("(max-width: 520px)").matches;
const facebookBtn = btns[2];
const waves = document.getElementsByClassName("wave");
const facebookWave = waves[2];
const images = [
  "images/mockup-for-whatsApp.png",
  "images/mockup-for-instagram.png",
  "images/mockup-for-messenger.png",
];

let preloaded = [];

const mockUp = document.getElementById("phone");
let btnsCounter = 0;
let timerCounter = 2;

facebookBtn.classList.remove("isGray");

const timer = setInterval(() => {
  btns[timerCounter].classList.add("isGray");
  waves[timerCounter].classList.add("hideWave");
  timerCounter++;
  if (timerCounter > 2) {
    timerCounter = 0;
  }
  btns[timerCounter].classList.remove("isGray");
  document
    .getElementById("phone")
    .parentNode.replaceChild(
      preloaded[timerCounter],
      document.getElementById("phone")
    );
  preloaded[timerCounter].setAttribute("id", "phone");
  waves[timerCounter].classList.remove("hideWave");
}, 5000);

/*
const timer = setInterval(() => {
  btns[timerCounter].classList.add("isGray");
  waves[timerCounter].classList.add("hideWave");
  timerCounter++;
  if (timerCounter > 2) {
    timerCounter = 0;
  }
  btns[timerCounter].classList.remove("isGray");
  mockUp.setAttribute("src", images[timerCounter]);
  waves[timerCounter].classList.remove("hideWave");
}, 5000);


btnsArray.forEach((btn, index) => {
  if (!isSmallScreen) {
    btn.addEventListener("click", () => {
      if (timer) {
        btns[timerCounter].classList.add("isGray");
        waves[timerCounter].classList.add("hideWave");
        clearInterval(timer);
      }
      btns[btnsCounter].classList.add("isGray");
      waves[btnsCounter].classList.add("hideWave");
      btnsCounter = index;
      btn.classList.remove("isGray");
      mockUp.setAttribute("src", images[btnsCounter]);
      waves[btnsCounter].classList.remove("hideWave");
    });
  }
});


if (isSmallScreen) {
  [...btns].forEach((btn) => btn.classList.remove("isGray"));
  const arrows = document.querySelectorAll(".button-arrow");

  let count = 2;
  if (timer) {
    clearInterval(timer);
  }

  arrows.forEach((arrowBtn) => {
    arrowBtn.addEventListener("click", () => {
      btns[count].classList.add("hide");
      arrowBtn.id == "less" ? count-- : count++;
      if (count > 2) {
        count = 0;
      }
      if (count < 0) {
        count = 2;
      }
      btns[count].classList.remove("hide");
      mockUp.setAttribute("src", images[count]);
    });
  });
}
*/
btnsArray.forEach((btn, index) => {
  if (!isSmallScreen) {
    btn.addEventListener("click", () => {
      if (timer) {
        btns[timerCounter].classList.add("isGray");
        waves[timerCounter].classList.add("hideWave");
        clearInterval(timer);
      }
      btns[btnsCounter].classList.add("isGray");
      waves[btnsCounter].classList.add("hideWave");
      btnsCounter = index;
      btn.classList.remove("isGray");
      document
        .getElementById("phone")
        .parentNode.replaceChild(
          preloaded[btnsCounter],
          document.getElementById("phone")
        );
      preloaded[btnsCounter].setAttribute("id", "phone");
      waves[btnsCounter].classList.remove("hideWave");
    });
  }
});

if (isSmallScreen) {
  [...btns].forEach((btn) => btn.classList.remove("isGray"));
  const arrows = document.querySelectorAll(".button-arrow");

  let count = 2;
  if (timer) {
    clearInterval(timer);
  }

  arrows.forEach((arrowBtn) => {
    arrowBtn.addEventListener("click", () => {
      btns[count].classList.add("hide");
      arrowBtn.id == "less" ? count-- : count++;
      if (count > 2) {
        count = 0;
      }
      if (count < 0) {
        count = 2;
      }
      btns[count].classList.remove("hide");
      document
        .getElementById("phone")
        .parentNode.replaceChild(
          preloaded[count],
          document.getElementById("phone")
        );
      preloaded[count].setAttribute("id", "phone");
    });
  });
}

function createObserver() {
  const wsLink = document.querySelector(".ws-link");
  const target = document.querySelector(".features");

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wsLink.classList.add("popup");
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(target);
}

createObserver();

const menu = document.getElementById("menu");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 66 || document.documentElement.scrollTop > 66) {
    menu.classList.add("menu--active");
  } else {
    menu.classList.remove("menu--active");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("cargando dom listo");
  images.forEach((image) => {
    let im = new Image();
    im.src = image;
    preloaded.push(im);
  });
});
