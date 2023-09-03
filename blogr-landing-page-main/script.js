const btn = document.querySelector(".dropdown-menu");
const dropContents = document.querySelectorAll("#dropdown");
btn.addEventListener("mouseenter", () => {
  document.querySelector("#dropdown").classList.toggle("show");
});
btn.addEventListener("mouseleave", () => {
  document.querySelector("#dropdown").classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const navigationMenu = document.querySelector(".nav-list");

  menuIcon.addEventListener("click", function() {
    navigationMenu.classList.toggle("active");
  });
});