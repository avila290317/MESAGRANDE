let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



//Funcion para que el ACTIVE se ponga dependiendo la section donde estamos
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      //Activar section para animaciones en scroll
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }

  });


  //Esta funcion es para que el navbar permanezca en todas las sections
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  //REMOVER EL ICONO CUANDO SELECIONEMOS UNA SECTION
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

}

/*FUNCION PARA (H3 SPAN) EN EL HOME*/
var typed = new Typed('.text', {
  strings: ["EL MEJOR SABOR", "LA MEJOR CALIDAD", "EL MEJOR PRECIO"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

$(function () {
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
    dots: false,
    centerModel: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


