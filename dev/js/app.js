let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);

        setTimeout(() => {
            intro.style.opacity = '0';
        }, 3000);

        setTimeout(() => {
            intro.style.backgroundColor = '#ffcc00'; // Cambiar el color de fondo
        }, 3500);

    }, 0);

});

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


  const spans = document.querySelectorAll('.text-wrapper p span');
  const numLetters = spans.length;
  
  spans.forEach(function(span, i) {
      const mappedIndex = i - (numLetters / 2);
      span.style.animationDelay = (mappedIndex * 0.25) + 's';
  });
  

/*spiral*/

let isFirefox = typeof InstallTrigger !== 'undefined';
const words = "Ivan.Designer";

let ANGLE = 360;
const ANIMATION_DURATION = 4000;

const animation = () => {
  ANGLE -= 1; // Incremento do ângulo
  document.querySelectorAll(".spiral *").forEach((el, i) => {
    
    const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
    const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;
    
    
    const offset = parseInt(el.dataset.offset);
    const delay = i * (ANIMATION_DURATION / 16) - offset;

    setTimeout(() => {
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }, delay);
  });

  requestAnimationFrame(animation);
};

const characters = words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`
    return div;
  };

  document.querySelector("#spiral").append(createElement(0));
  document
    .querySelector("#spiral2")
    .append(createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2)));
});


// @property CSS doesn't work in Firefox, so it must be animated using JavaScript.
if(isFirefox){
  animation();
}



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
