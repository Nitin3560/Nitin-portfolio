// main.js — Nitin Singh Rathore portfolio
// Sections: Canvas · Navbar · Mobile menu · Scroll fade-in · Counters · Active nav

// --- Hero canvas: animated particle network ---
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  let pts = [];

  function resize() {
    canvas.width  = window.innerWidth;  // fill full viewport
    canvas.height = window.innerHeight;
  }

  function spawn() {
    pts = [];
    const n = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80); // ~1 particle per 12k px², max 80
    for (let i = 0; i < n; i++) {
      pts.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - .5) * .28,  // slow random drift
        vy: (Math.random() - .5) * .28,
        r:  Math.random() * 1.4 + .4,    // radius 0.4–1.8px
        a:  Math.random() * .38 + .08,   // base alpha
        ph: Math.random() * Math.PI * 2  // phase offset so pulses aren't in sync
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pts.forEach((p, i) => {
      p.x  += p.vx;               // move
      p.y  += p.vy;
      p.ph += .016;               // advance pulse phase

      // wrap edges so particles re-enter from the other side
      if (p.x < 0)             p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0)             p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const alpha = p.a * (.7 + .3 * Math.sin(p.ph)); // slow breathing pulse

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(155,109,255,${alpha})`;
      ctx.fill();

      // draw faint lines to nearby particles — simulates signal mesh
      for (let j = i + 1; j < pts.length; j++) {
        const q  = pts[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {                               // only connect within 130px
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(155,109,255,${(1 - d / 130) * .1})`; // fades with distance
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw); // loop
  }

  resize(); spawn(); draw();
  window.addEventListener('resize', () => { resize(); spawn(); }); // respawn on resize
})();

// --- Navbar: frosted-glass background after scrolling ---
const navbar = document.getElementById('navbar');
function syncScrollState() {
  const isScrolled = window.scrollY > 20;
  navbar.classList.toggle('scrolled', isScrolled); // .scrolled adds backdrop-filter
  document.body.classList.toggle('scrolled', window.scrollY > 8); // hides scroll hint once movement starts
}
window.addEventListener('scroll', syncScrollState, { passive: true });
syncScrollState();

// --- Mobile hamburger menu ---
const hbg     = document.getElementById('hbg');
const mobmenu = document.getElementById('mobmenu');
hbg.addEventListener('click', () => mobmenu.classList.toggle('open'));
function closeMob() { mobmenu.classList.remove('open'); } // called by onclick in HTML links

// --- Scroll fade-in: adds .vis when element enters viewport ---
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.08 }); // triggers when 8% of element is visible
document.querySelectorAll('.fu').forEach(el => fadeObs.observe(el));

// --- Counter animation: counts up from 0 when metric scrolls into view ---
function animCount(el) {
  const target = parseFloat(el.dataset.count); // e.g. 289.6
  const suffix = el.dataset.suffix || '';       // e.g. "%"
  const dur    = 1600;                          // animation duration ms
  const start  = performance.now();

  (function step(now) {
    const t     = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);      // ease-out cubic — fast start, slow finish
    const val   = eased * target;
    el.textContent = (target % 1 !== 0 ? val.toFixed(1) : Math.round(val)) + suffix;
    if (t < 1) requestAnimationFrame(step);
  })(start);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && e.target.dataset.count !== undefined) {
      animCount(e.target);
      counterObs.unobserve(e.target); // only fire once per element
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

// --- Active nav link: highlights the link matching the current section ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.45 }); // section needs to be ~half in view
sections.forEach(s => sectionObs.observe(s));
