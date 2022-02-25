const btns = document.getElementsByClassName("social-btn");
const facebookBtn = btns[2];
const wave = document.getElementById("wave");
const waveBgColors = ["25D366", "8E0FD5FA", "0099FF"];
let btnsCounter = 0;
let timerCounter = 2;

facebookBtn.classList.remove("isGray");

const timer = setInterval(() => {
  btns[timerCounter].classList.add("isGray");
  timerCounter++;
  if (timerCounter > 2) {
    timerCounter = 0;
  }
  btns[timerCounter].classList.remove("isGray");
  wave.style.setProperty("--bg-color", "#" + waveBgColors[timerCounter]);
}, 5000);

Array.from(btns).forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (timer) {
      btns[timerCounter].classList.add("isGray");
      clearInterval(timer);
    }

    btns[btnsCounter].classList.add("isGray");
    btn.classList.remove("isGray");
    wave.style.setProperty("--bg-color", "#" + waveBgColors[index]);
    btnsCounter = index;
  });
});

if (window.matchMedia("(max-width: 490px)").matches) {
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
      wave.style.setProperty("--bg-color", "#" + waveBgColors[count]);
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
