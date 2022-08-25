document.addEventListener('DOMContentLoaded', () => {
  
    abrirMapa();

})

const abrirMapa = () => {

    const barra = document.querySelector('#lateral1');
    const barra2 = document.querySelector('#lateral2');
    const desplegable = document.querySelector('#mapa');


    barra.addEventListener('click', function(e) {

        desplegable.classList.toggle('mapa');

    });

    barra2.addEventListener('click', function(e) {

        desplegable.classList.remove('mapa');

    });

}