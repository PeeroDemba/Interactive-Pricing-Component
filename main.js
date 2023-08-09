"use strict";

const views = document.getElementById("views");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");

const toggle = document.getElementById("toggle");

function discount() {
  if (toggle.className == "prev") {
    toggle.style.left = "10%";
    toggle.className = "init";
  } else if (toggle.className == "init") {
    toggle.style.left = "55%";
    toggle.className = "prev";
  }
}

toggle.addEventListener("click", discount);

function starterpack() {
  if (toggle.classList.contains("init")) {
    price1.innerHTML = "$16.00";
    price2.innerHTML = "$16.00";
  } else if (toggle.classList.contains("prev")) {
    price1.innerHTML = "$12.00";
    price2.innerHTML = "$12.00";
  }
}

toggle.addEventListener("click", starterpack);

// Mouse

const range = document.getElementById("range");
const slidercircle = document.getElementById("slidercircle");
const fullrange = document.getElementsByClassName("range");
let startBar;
let endBar;
let divisor;

function moved1(event) {
  startBar = (window.innerWidth - fullrange[0].offsetWidth) / 2;
  endBar = startBar + fullrange[0].offsetWidth;
  divisor = fullrange[0].offsetWidth / 100;

  if (event.button == 0) {
    slidercircle.addEventListener("mousemove", moved2);
    event.preventDefault();
  }
}

slidercircle.addEventListener("mousedown", moved1);

function moved2(event) {
  let nPos = Math.floor((event.clientX - startBar) / divisor);

  toggle.removeEventListener("click", starterpack);

  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("init") && nPos >= 0 && nPos <= 19) {
      price1.innerHTML = "$8.00";
      price2.innerHTML = "$8.00";
    } else if (toggle.classList.contains("prev") && nPos >= 0 && nPos <= 19) {
      price1.innerHTML = "$6.00";
      price2.innerHTML = "$6.00";
    }
    if (toggle.classList.contains("init") && nPos >= 20 && nPos <= 38) {
      price1.innerHTML = "$12.00";
      price2.innerHTML = "$12.00";
    } else if (toggle.classList.contains("prev") && nPos >= 20 && nPos <= 38) {
      price1.innerHTML = "$9.00";
      price2.innerHTML = "$9.00";
    }
    if (toggle.classList.contains("init") && nPos >= 39 && nPos <= 57) {
      price1.innerHTML = "$16.00";
      price2.innerHTML = "$16.00";
    } else if (toggle.classList.contains("prev") && nPos >= 39 && nPos <= 57) {
      price1.innerHTML = "$12.00";
      price2.innerHTML = "$12.00";
    }
    if (toggle.classList.contains("init") && nPos >= 58 && nPos <= 76) {
      price1.innerHTML = "$24.00";
      price2.innerHTML = "$24.00";
    } else if (toggle.classList.contains("prev") && nPos >= 58 && nPos <= 76) {
      price1.innerHTML = "$18.00";
      price2.innerHTML = "$18.00";
    }
    if (toggle.classList.contains("init") && nPos >= 77 && nPos <= 95) {
      price1.innerHTML = "$36.00";
      price2.innerHTML = "$36.00";
    } else if (toggle.classList.contains("prev") && nPos >= 77 && nPos <= 95) {
      price1.innerHTML = "$27.00";
      price2.innerHTML = "$27.00";
    }
  });

  if (event.buttons == 0) {
    slidercircle.removeEventListener("mousemove", moved2);
  } else {
    if (nPos >= 95 || nPos < 0) {
      slidercircle.removeEventListener("mousemove", moved2);
      slidercircle.style.backgroundColor = "hsl(174, 86%, 45%)";
    } else {
      slidercircle.style.left = nPos + "%";
      slidercircle.style.backgroundColor = "hsl(174, 83%, 30%)";
      range.style.width = nPos + "%";
      if (nPos >= 0 && nPos <= 19) {
        if (toggle.className == "init") {
          views.innerHTML = "10K";
          price1.innerHTML = "$8.00";
          price2.innerHTML = "$8.00";
        } else if (toggle.className == "prev") {
          views.innerHTML = "10K";
          price1.innerHTML = "$6.00";
          price2.innerHTML = "$6.00";
        }
      } else if (nPos >= 20 && nPos <= 38) {
        if (toggle.className == "init") {
          views.innerHTML = "50K";
          price1.innerHTML = "$12.00";
          price2.innerHTML = "$12.00";
        } else if (toggle.className == "prev") {
          views.innerHTML = "50K";
          price1.innerHTML = "$9.00";
          price2.innerHTML = "$9.00";
        }
      } else if (nPos >= 39 && nPos <= 57) {
        if (toggle.className == "init") {
          views.innerHTML = "100K";
          price1.innerHTML = "$16.00";
          price2.innerHTML = "$16.00";
        } else if (toggle.className == "prev") {
          views.innerHTML = "100K";
          price1.innerHTML = "$12.00";
          price2.innerHTML = "$12.00";
        }
      } else if (nPos >= 58 && nPos <= 76) {
        if (toggle.className == "init") {
          views.innerHTML = "500K";
          price1.innerHTML = "$24.00";
          price2.innerHTML = "$24.00";
        } else if (toggle.className == "prev") {
          views.innerHTML = "500K";
          price1.innerHTML = "$18.00";
          price2.innerHTML = "$18.00";
        }
      } else {
        if (toggle.className == "init") {
          views.innerHTML = "1M";
          price1.innerHTML = "$36.00";
          price2.innerHTML = "$36.00";
        } else if (toggle.className == "prev") {
          views.innerHTML = "1M";
          price1.innerHTML = "$27.00";
          price2.innerHTML = "$27.00";
        }
      }
    }
  }
}

slidercircle.addEventListener("mouseout", function () {
  slidercircle.style.backgroundColor = "hsl(174, 86%, 45%)";
});

// Touch Screens

const ranget = document.getElementById("range");
const slidercirclet = document.getElementById("slidercircle");
const fullranget = document.getElementsByClassName("range");
let startBart;
let endBart;
let divisort;

function movert(event) {
  startBart = (window.innerWidth - fullranget[0].offsetWidth) / 2;
  endBart = startBart + fullranget[0].offsetWidth;
  divisort = fullranget[0].offsetWidth / 100;
  slidercirclet.addEventListener("touchmove", movedt);
  event.preventDefault();
}

slidercirclet.addEventListener("touchstart", movert);

function movedt(event) {
  let nPost = Math.floor((event.touches[0].clientX - startBart) / divisort);

  toggle.removeEventListener("click", starterpack);

  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("init") && nPost >= 0 && nPost <= 18) {
      price1.innerHTML = "$8.00";
      price2.innerHTML = "$8.00";
    } else if (toggle.classList.contains("prev") && nPost >= 0 && nPost <= 18) {
      price1.innerHTML = "$6.00";
      price2.innerHTML = "$6.00";
    }
    if (toggle.classList.contains("init") && nPost >= 19 && nPost <= 37) {
      price1.innerHTML = "$12.00";
      price2.innerHTML = "$12.00";
    } else if (
      toggle.classList.contains("prev") &&
      nPost >= 19 &&
      nPost <= 37
    ) {
      price1.innerHTML = "$9.00";
      price2.innerHTML = "$9.00";
    }
    if (toggle.classList.contains("init") && nPost >= 38 && nPost <= 56) {
      price1.innerHTML = "$16.00";
      price2.innerHTML = "$16.00";
    } else if (
      toggle.classList.contains("prev") &&
      nPost >= 38 &&
      nPost <= 56
    ) {
      price1.innerHTML = "$12.00";
      price2.innerHTML = "$12.00";
    }
    if (toggle.classList.contains("init") && nPost >= 57 && nPost <= 75) {
      price1.innerHTML = "$24.00";
      price2.innerHTML = "$24.00";
    } else if (
      toggle.classList.contains("prev") &&
      nPost >= 57 &&
      nPost <= 75
    ) {
      price1.innerHTML = "$18.00";
      price2.innerHTML = "$18.00";
    }
    if (toggle.classList.contains("init") && nPost >= 76 && nPost <= 90) {
      price1.innerHTML = "$36.00";
      price2.innerHTML = "$36.00";
    } else if (
      toggle.classList.contains("prev") &&
      nPost >= 76 &&
      nPost <= 90
    ) {
      price1.innerHTML = "$27.00";
      price2.innerHTML = "$27.00";
    }
  });

  if (nPost >= 90 || nPost < 0) {
    slidercirclet.style.backgroundColor = "hsl(174, 86%, 45%)";
  } else {
    slidercirclet.style.left = nPost + "%";
    slidercirclet.style.backgroundColor = "hsl(174, 83%, 30%)";
    ranget.style.width = nPost + "%";
    if (nPost >= 0 && nPost <= 18) {
      if (toggle.className == "init") {
        views.innerHTML = "10K";
        price1.innerHTML = "$8.00";
        price2.innerHTML = "$8.00";
      } else if (toggle.className == "prev") {
        views.innerHTML = "10K";
        price1.innerHTML = "$6.00";
        price2.innerHTML = "$6.00";
      }
    } else if (nPost >= 19 && nPost <= 37) {
      if (toggle.className == "init") {
        views.innerHTML = "50K";
        price1.innerHTML = "$12.00";
        price2.innerHTML = "$12.00";
      } else if (toggle.className == "prev") {
        views.innerHTML = "50K";
        price1.innerHTML = "$9.00";
        price2.innerHTML = "$9.00";
      }
    } else if (nPost >= 38 && nPost <= 56) {
      if (toggle.className == "init") {
        views.innerHTML = "100K";
        price1.innerHTML = "$16.00";
        price2.innerHTML = "$16.00";
      } else if (toggle.className == "prev") {
        views.innerHTML = "100K";
        price1.innerHTML = "$12.00";
        price2.innerHTML = "$12.00";
      }
    } else if (nPost >= 57 && nPost <= 75) {
      if (toggle.className == "init") {
        views.innerHTML = "500K";
        price1.innerHTML = "$24.00";
        price2.innerHTML = "$24.00";
      } else if (toggle.className == "prev") {
        views.innerHTML = "500K";
        price1.innerHTML = "$18.00";
        price2.innerHTML = "$18.00";
      }
    } else {
      if (toggle.className == "init") {
        views.innerHTML = "1M";
        price1.innerHTML = "$36.00";
        price2.innerHTML = "$36.00";
      } else if (toggle.className == "prev") {
        views.innerHTML = "1M";
        price1.innerHTML = "$27.00";
        price2.innerHTML = "$27.00";
      }
    }
  }
}
