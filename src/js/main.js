document.addEventListener('DOMContentLoaded', () => {
  
    mapa();

})

const mapa = () => {

    abrirMapa();
    cambiarImagen();

}

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

const cambiarImagen = () => {

    const scroll__izq = document.querySelector('.mapa__img1');
    const scroll__der = document.querySelector('.mapa__img3');
    const max = 7;
    const min = 1;
    const maxPortada = 14;
    const minPortada = 8;

    scroll__der.addEventListener('click', () => {

        let imagen = document.querySelector('.mapa__img2');
        let portada = document.querySelector('.mapa__portada');
        let newIdPortada = parseInt(portada.id) + 1;
        let newId = parseInt(imagen.id) + 1;

        if(newIdPortada <= maxPortada) {
            newIdPortada = newIdPortada + '';
            portada.remove();
            crearPortada(newIdPortada);
        }

        if(newId <= max) {

            newId = newId + '';
            imagen.remove();
            cambiarH1(newId);
            crearImagen(newId);
        }

    });

    scroll__izq.addEventListener('click', () => {

        let imagen = document.querySelector('.mapa__img2');
        let newId = parseInt(imagen.id) - 1;
        let portada = document.querySelector('.mapa__portada');
        let newIdPortada = parseInt(portada.id) - 1;
        
        if(newIdPortada >= minPortada) {
            newIdPortada = newIdPortada + '';
            portada.remove();
            crearPortada(newIdPortada);
        }

        if(newId >= min) {

            newId = newId + '';
            imagen.remove();
            cambiarH1(newId);
            crearImagen(newId);

        }

    });



}

const crearImagen = (newId) => {

    const newImagen = document.createElement('img');
    const div = document.querySelector('#imagenAbismo');

    newImagen.setAttribute("id", newId);
    newImagen.classList.add('mapa__img2');
    newImagen.src = "../../images/Maldiciones/Maldicion" + newId + ".jpg";
    

    div.appendChild(newImagen);

}

const crearPortada = (newId) => {

    const newImagen = document.createElement('img');
    const div = document.querySelector('#mapaAbismo');

    newImagen.setAttribute("id", newId);
    newImagen.classList.add('mapa__portada');
    newImagen.src = "../../images/Capas/Capa" + newId + ".jpg";
    

    div.appendChild(newImagen);

}

const cambiarH1 = (Capa) => {

    const H1 = document.getElementById('numeroCapa');
    H1.innerHTML = `Capa ${Capa}`


}