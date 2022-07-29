const iconoMenu = document.querySelector('.menu'),
      menu = document.querySelector('.nav');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú
    menu.classList.toggle('active');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './img/bx-menu.svg'){
        e.target.setAttribute('src','./img/bx-x.svg');
    }else{
        e.target.setAttribute('src','./img/bx-menu.svg');
    }
});

const img = document.querySelector('.menu__img');
const enlace = document.querySelectorAll(".enlace");

for (let i=0; i < 4; i++){
    enlace[i].addEventListener("click", function() {

        menu.classList.toggle('active');
        img.setAttribute('src','./img/bx-menu.svg');
    });
}
