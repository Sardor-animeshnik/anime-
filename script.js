const themeBtn = document.getElementById('toggle-theme');
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.getElementById('sideMenu');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
