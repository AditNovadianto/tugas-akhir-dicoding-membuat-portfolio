const links = document.querySelectorAll(".navBar");
const menuToggle = document.querySelector(".menu-toggle input");
const navItems = document.querySelectorAll(".navItem");
const carousel = document.querySelector(".carousel");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const header = document.querySelector("header");
const checkbox = document.querySelector(".checkbox");
const navMobile = document.querySelector(".navMobile");

let index = 0;

leftButton.style.display = "none";

const slide = () => {
  if (index === 0) {
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (index === 4) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }

  carousel.style.transform = `translateX(-${index * 100}%)`;
};

leftButton.addEventListener("click", () => {
  index -= 1;

  slide();
});

rightButton.addEventListener("click", () => {
  index += 1;

  slide();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("focus");
    });
    link.classList.add("focus");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

navItems.forEach((navItem) => {
  console.log(navItem);
  navItem.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

document.addEventListener("click", (e) => {
  if (e.target === checkbox) {
    return;
  }
  if (!navMobile.contains(e.target)) {
    checkbox.checked = false;
  }
});
