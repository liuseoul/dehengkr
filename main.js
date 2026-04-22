// Nav mobile toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'rgba(255,255,255,1)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '.service-card, .pillar, .case-card, .region, .stat'
);

const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObs.observe(el);
});

// China cities modal
const chinaModal   = document.getElementById('china-modal');
const btnOpenModal = document.getElementById('btn-china-modal');
const btnCloseModal = document.getElementById('modal-close');

function openModal()  { chinaModal.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeModal() { chinaModal.classList.remove('open'); document.body.style.overflow = ''; }

btnOpenModal?.addEventListener('click', openModal);
btnCloseModal?.addEventListener('click', closeModal);

// Close on overlay click (outside modal-box)
chinaModal?.addEventListener('click', e => {
  if (e.target === chinaModal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && chinaModal.classList.contains('open')) closeModal();
});

// Contact form
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Inquiry Sent ✓';
  btn.style.background = '#2a6b3c';
  btn.disabled = true;
});
