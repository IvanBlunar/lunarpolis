

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

console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};


// Función para quitar la clase 'active' en pantallas grandes
function removeActiveClass() {
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (window.innerWidth > 768) {
      navbarMenu.classList.remove('active');
  }
}

// Llamar a la función al cargar la página
window.addEventListener('load', removeActiveClass);

// Llamar a la función cuando la ventana cambie de tamaño
window.addEventListener('resize', removeActiveClass);

  





