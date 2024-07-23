document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  // Verifica si los elementos existen
  if (menuButton && mobileMenu && navbar) {
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-black', 'bg-opacity-50');
      } else {
        navbar.classList.remove('bg-black', 'bg-opacity-50');
      }
    });
  } else {
    console.error('Uno o más elementos no se encontraron en el DOM');
  }
});
