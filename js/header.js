// efecto buton ir arriba//

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click', () => {
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener("scroll", function(){

    // efecto de scroll cambia la apariencia del nav//
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);


    // efecto buton ir arriba//
    if (window.scrollY < 300) {
        irArriba.style.right = -100 + "px";
    } else {
        irArriba.style.right = 5 + "px";
    }
});