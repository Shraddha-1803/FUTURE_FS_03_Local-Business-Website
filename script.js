document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

  // Smooth Scroll
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  // Open Map
  window.openMap = function() {
    window.open("https://www.google.com/maps/search/MomoMia+Rampur+Garden+Bareilly", "_blank");
  };

  // DARK MODE FIX
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️";
      } else {
        toggle.textContent = "🌙";
      }
    });
  }

  // SCROLL ANIMATION
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));

});