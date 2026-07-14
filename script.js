// ── Header scroll effect
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll(
  '.feature-card, .product-card, .testi-card, .step-item'
).forEach(el => observer.observe(el));

// ── Category tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
    });
    tab.classList.add('active');
  });
});

// ── Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ── Animated counter
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();

  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(ease * target);

    el.textContent =
      current.toLocaleString('id-ID') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = document.querySelectorAll('.stat-num');

      if (nums[0]) animateCounter(nums[0], 50000, 'K+');
      if (nums[2]) animateCounter(nums[2], 34);

      statsObserver.disconnect();
    }
  });
}, {
  threshold: 0.5
});

const statsEl = document.querySelector('.hero-stats');

if (statsEl) {
  statsObserver.observe(statsEl);
}

// ── FORM DAFTAR
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Pendaftaran berhasil!");

    window.location.href = "index.html";
  });
}<script>
alert("JS berhasil terbaca");
</script>