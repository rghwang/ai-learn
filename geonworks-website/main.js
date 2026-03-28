/* ============================================================
   GEONWORKS — Main JavaScript
   ============================================================ */

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Intersection Observer for fade-up animations
const fadeEls = document.querySelectorAll(
  '.product-card, .feature-card, .about__inner, .specs__table-wrap, .gallery-item, .stat'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// Key highlight animation on hero keyboard
const keys = document.querySelectorAll('.kb-key:not(.kb-key--fn-gap)');
let keyIdx = 0;

function cycleKeys() {
  keys.forEach(k => k.style.background = '');
  if (keys[keyIdx]) {
    keys[keyIdx].style.background = 'linear-gradient(145deg, #3d3020, #2a2010)';
    keys[keyIdx].style.borderColor = 'rgba(212,168,83,0.4)';
    keys[keyIdx].style.color = '#d4a853';
    setTimeout(() => {
      if (keys[keyIdx]) {
        keys[keyIdx].style.background = '';
        keys[keyIdx].style.borderColor = '';
        keys[keyIdx].style.color = '';
      }
    }, 200);
  }
  keyIdx = (keyIdx + 1) % keys.length;
}

setInterval(cycleKeys, 60);

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
