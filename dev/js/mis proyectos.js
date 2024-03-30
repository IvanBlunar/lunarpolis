

document.addEventListener('DOMContentLoaded', function () {
  // Obtener el elemento del botón de hamburguesa y el menú
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  // Agregar un evento de clic al botón de hamburguesa
  navbarToggle.addEventListener('click', () => {
      // Alternar la clase 'active' en el botón de hamburguesa
      navbarToggle.classList.toggle('active');

      // Alternar la clase 'active' en el menú para mostrar/ocultar
      navbarMenu.classList.toggle('active');
      
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
});


  





