 // ─── Tooltips Init ───
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new bootstrap.Tooltip(el, { customClass: 'custom-tooltip' });
  });

  // ─── Popovers Init ───
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    new bootstrap.Popover(el);
  });

  // ─── Form Validation ───
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.classList.add('was-validated');
    } else {
      // Success feedback
      const btn = this.querySelector('[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Sent Successfully!';
      btn.style.background = '#198754';
      btn.style.boxShadow = '0 0 24px rgba(25,135,84,.5)';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.style.boxShadow = '';
        this.reset();
        this.classList.remove('was-validated');
      }, 3000);
    }
  });

  // ─── Scroll Reveal ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ─── Active Nav on Scroll ───
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });