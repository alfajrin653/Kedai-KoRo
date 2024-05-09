// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger di clik akan muncul
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar siled navbarbar untuk menghilangkan navbar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
