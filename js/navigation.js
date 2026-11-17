// Mobil menyuni ochish va yopish
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
