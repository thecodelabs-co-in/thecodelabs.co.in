(function () {
  "use strict";

  const body = document.body;
  const header = document.getElementById("header");
  const mobileToggle = document.getElementById("mobileToggle");
  const primaryNav = document.getElementById("primaryNav");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollTopButton = document.getElementById("scrollTop");
  const contactForm = document.getElementById("contactForm");
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  function closeMobileNav() {
    if (!primaryNav || !mobileToggle) return;
    primaryNav.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
    const icon = mobileToggle.querySelector("i");
    if (icon) {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-list");
    }
  }

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener("click", function () {
      const isOpen = primaryNav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      body.classList.toggle("menu-open", isOpen);
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-list", !isOpen);
        icon.classList.toggle("bi-x", isOpen);
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMobileNav();
    });
  });

  function updateScrolledState() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  function updateScrollTopButton() {
    if (!scrollTopButton) return;
    scrollTopButton.classList.toggle("active", window.scrollY > 320);
  }

  function updateActiveNav() {
    const offset = window.scrollY + 120;
    navLinks.forEach(function (link) {
      const hash = link.getAttribute("href");
      if (!hash || !hash.startsWith("#")) return;
      const section = document.querySelector(hash);
      if (!section) return;
      const inSection = offset >= section.offsetTop && offset < section.offsetTop + section.offsetHeight;
      link.classList.toggle("active", inSection);
    });
  }

  document.addEventListener("scroll", function () {
    updateScrolledState();
    updateScrollTopButton();
    updateActiveNav();
  });

  window.addEventListener("load", function () {
    updateScrolledState();
    updateScrollTopButton();
    updateActiveNav();
  });

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const nameInput = contactForm.querySelector("#name");
      const emailInput = contactForm.querySelector("#email");
      const messageInput = contactForm.querySelector("#message");
      if (!nameInput || !emailInput || !messageInput) {
        return;
      }
      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const message = encodeURIComponent(messageInput.value.trim());
      const subject = encodeURIComponent("Project inquiry from website");
      const bodyText = encodeURIComponent(
        "Name: " + decodeURIComponent(name) + "\n" +
        "Email: " + decodeURIComponent(email) + "\n\n" +
        "Project Details:\n" + decodeURIComponent(message)
      );
      window.location.href = "mailto:info@thecodelabs.co.in?subject=" + subject + "&body=" + bodyText;
    });
  }

  // Close menu on escape for accessibility.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileNav();
    }
  });
})();
