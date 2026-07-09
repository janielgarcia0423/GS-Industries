// NAVBAR SCROLL EFFECT
const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

// MOBILE MENU
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// SCROLL REVEAL ANIMATIONS
const scrollRevealItems = document.querySelectorAll(
  ".section-label, .section h2, .section-text, .info-card, .project-card, .project-specs div, .capability-card, .industry-card, .contact-card, .contact-row"
);

scrollRevealItems.forEach((item) => {
  item.classList.add("scroll-reveal");
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  scrollRevealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 90) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
revealOnScroll();