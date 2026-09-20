// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });

    // Tutup menu saat link diklik
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
      });
    });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const subjek = document.getElementById('subjek').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      if (!nama || !email || !subjek || !pesan) {
        formStatus.textContent = '⚠️ Mohon lengkapi semua field.';
        formStatus.style.color = '#ef4444';
        return;
      }

      // Simulasi pengiriman
      formStatus.textContent = '✅ Terima kasih, ' + nama + '! Pesan Anda telah terkirim.';
      formStatus.style.color = '#10b981';
      contactForm.reset();

      setTimeout(function () {
        formStatus.textContent = '';
      }, 5000);
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
