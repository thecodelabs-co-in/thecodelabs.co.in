// Copyright year
document.getElementById("copyrightYear").textContent = new Date().getFullYear();

// Hero typing animation
(function() {
  const el = document.getElementById("heroTyping");
  const segments = [
    { text: "Transforming ideas", tag: null },
    { text: "\n", tag: "br" },
    { text: "into ", tag: null },
    { text: "intelligent", tag: "hl" },
    { text: "\n", tag: "br" },
    { text: "solutions.", tag: null }
  ];
  const cursor = document.createElement("span");
  cursor.className = "hero-cursor";
  el.appendChild(cursor);
  let segIdx = 0, charIdx = 0;
  let currentSpan = null;
  function type() {
    if (segIdx >= segments.length) { cursor.remove(); return; }
    const seg = segments[segIdx];
    if (seg.tag === "br") {
      el.insertBefore(document.createElement("br"), cursor);
      segIdx++; charIdx = 0; currentSpan = null;
      setTimeout(type, 120);
      return;
    }
    if (charIdx === 0 && seg.tag) {
      currentSpan = document.createElement("span");
      currentSpan.className = seg.tag;
      el.insertBefore(currentSpan, cursor);
    }
    const target = currentSpan || el;
    if (currentSpan) {
      currentSpan.textContent += seg.text[charIdx];
    } else {
      target.insertBefore(document.createTextNode(seg.text[charIdx]), cursor);
    }
    charIdx++;
    if (charIdx >= seg.text.length) { segIdx++; charIdx = 0; currentSpan = null; }
    setTimeout(type, 55 + Math.random() * 35);
  }
  setTimeout(type, 400);
})();

// Mobile hamburger menu
const hamburger = document.getElementById("navHamburger");
const navLinks = document.querySelector(".nav-links");
const navCta = document.querySelector(".nav-cta");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  navCta.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    navCta.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// Sticky nav
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// Testimonial slider
let cur = 0;
const total = 2; // 0 and 1 (showing 2 cards per view, 4 cards = 2 slides)
function goTo(n) {
  cur = Math.max(0, Math.min(n, total - 1));
  const cardW = document.querySelector(".tcard").offsetWidth + 20;
  document.getElementById("sliderTrack").style.transform = "translateX(-" + (cur * cardW * 2) + "px)";
  document.querySelectorAll(".sdot").forEach((d, i) => d.classList.toggle("active", i === cur));
}
function slideNext() { goTo(cur + 1); }
function slidePrev() { goTo(cur - 1); }


// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let ok = true;
  [["f_fn","","e_fn"],["f_ln","","e_ln"],["f_em","email","e_em"],["f_msg","","e_msg"]].forEach(([id, type, eid]) => {
    const el = document.getElementById(id);
    const err = document.getElementById(eid);
    const empty = !el.value.trim();
    const badEmail = type === "email" && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
    if (empty || badEmail) {
      el.classList.add("err-field"); err.classList.add("show"); ok = false;
    } else {
      el.classList.remove("err-field"); err.classList.remove("show");
    }
  });
  if (ok) {
    const fn = document.getElementById("f_fn").value;
    const ln = document.getElementById("f_ln").value;
    const em = document.getElementById("f_em").value;
    const ph = document.getElementById("f_ph").value;
    const sv = document.getElementById("f_svc").value;
    const mg = document.getElementById("f_msg").value;
    const body = [mg, "", "— " + fn + " " + ln, em, ph, sv ? "Interested in: " + sv : ""].filter(Boolean).join("\n");
    window.location.href = "mailto:info@thecodelabs.co.in?subject=" + encodeURIComponent("Project enquiry from " + fn + " " + ln) + "&body=" + encodeURIComponent(body);
  }
});

// Testimonials full — 1 at a time
let tfCur = 0;
const tfTotal = 4;
function tfGoTo(n) {
  tfCur = Math.max(0, Math.min(n, tfTotal - 1));
  document.querySelectorAll('.tf-slide').forEach((s, i) => s.classList.toggle('active', i === tfCur));
  document.querySelectorAll('.tfdot').forEach((d, i) => d.classList.toggle('active', i === tfCur));
}
function tfNext() { tfGoTo((tfCur + 1) % tfTotal); }
function tfPrev() { tfGoTo((tfCur - 1 + tfTotal) % tfTotal); }
// Auto-advance every 5s
let tfTimer = setInterval(tfNext, 5000);
document.querySelectorAll('.tfarrow, .tfdot').forEach(el => {
  el.addEventListener('click', () => { clearInterval(tfTimer); tfTimer = setInterval(tfNext, 5000); });
});

