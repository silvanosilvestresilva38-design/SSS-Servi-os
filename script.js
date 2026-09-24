// Ano atual no rodapé
document.getElementById('year').textContent = '· ' + new Date().getFullYear();

// Menu mobile: em telas pequenas, o botão ☰ mostra/esconde o botão de WhatsApp
const navToggle = document.getElementById('navToggle');
const navCta = document.querySelector('.nav-cta');

navToggle.addEventListener('click', () => {
  const visible = navCta.style.display === 'inline-block';
  navCta.style.display = visible ? 'none' : 'inline-block';
});

// Rolagem suave para os links internos (reforço além do CSS)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
