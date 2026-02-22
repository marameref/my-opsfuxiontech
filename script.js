const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const settingsToggle = document.getElementById('settingsToggle');
const settingsMenu = document.getElementById('settingsMenu');
const logoSwitch = document.getElementById('logoSwitch');
const siteLogo = document.getElementById('siteLogo');
const scrollTopBtn = document.getElementById('scrollTop');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.hidden = open;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  });
}

if (settingsToggle && settingsMenu) {
  settingsToggle.addEventListener('click', () => {
    const open = settingsToggle.getAttribute('aria-expanded') === 'true';
    settingsToggle.setAttribute('aria-expanded', String(!open));
    settingsMenu.hidden = open;
  });

  document.addEventListener('click', (event) => {
    if (!settingsMenu.contains(event.target) && !settingsToggle.contains(event.target)) {
      settingsMenu.hidden = true;
      settingsToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (logoSwitch && siteLogo) {
  const logoPreference = localStorage.getItem('opsfuxion-logo') || 'a';
  logoSwitch.checked = logoPreference === 'b';
  siteLogo.src = logoPreference === 'b' ? siteLogo.dataset.logoB : siteLogo.dataset.logoA;

  logoSwitch.addEventListener('change', () => {
    const choice = logoSwitch.checked ? 'b' : 'a';
    siteLogo.src = choice === 'b' ? siteLogo.dataset.logoB : siteLogo.dataset.logoA;
    localStorage.setItem('opsfuxion-logo', choice);
  });
}

document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panel = trigger.nextElementSibling;
    trigger.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 380) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', targetId);
  });
});
