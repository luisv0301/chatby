const btns = document.getElementsByClassName("social-btn");
const facebookBtn = btns[2];
const waves = document.getElementsByClassName("wave");
const facebookWave = waves[2];
const waveBgColors = ["25D366", "8E0FD5FA", "0099FF"];
const images = [
  "images/mockup-for-whatsApp.png",
  "images/mockup-for-instagram.png",
  "images/mockup-for-messenger.png",
];
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
  mockUp.setAttribute("src", images[timerCounter]);
  waves[timerCounter].classList.remove("hideWave");
}, 5000);

Array.from(btns).forEach((btn, index) => {
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
});

if (window.matchMedia("(max-width: 520px)").matches) {
  [...btns].forEach((btn) => btn.classList.remove("isGray"));
  const clasess = ["whatsapp", "instagram", "messenger"];
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
