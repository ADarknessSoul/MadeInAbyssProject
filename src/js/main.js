document.addEventListener('DOMContentLoaded', () => {
  
    mapa();

})

const mapa = () => {

    abrirMapa();
    cambiarImagen();
    desplazarCapa();
    reproducirAudio();

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
    let mapaCompleto = document.querySelector('.mapa__contenedor');

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

    mapaCompleto.addEventListener('click', () => {

        mostrar();

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

const desplazarCapa = () => {

    const frame = document.getElementById('imagenAbismo');
    const desplegable = document.querySelector('#mapa');

    frame.addEventListener('click', (e) => {

        let Image = document.querySelector('.mapa__img2');
        e.preventDefault(); //Se previene la acción por default para que no nos lleve de golpe al id

        const seccion = document.getElementById('Capa' + Image.id);
        desplegable.classList.remove('mapa');
        seccion.scrollIntoView({behavior: "smooth"}); //Objeto de configuración

    });


}



const mostrar = () => {

    let img = document.createElement('IMG');
    let mapa = document.querySelector('.mapa__portada');

    console.log('../../images/Capas/Capa' + mapa.id + '.jpg');

    img.src = '../../images/Capas/Capa' + mapa.id + '.jpg';

    //Crear overlay con imágen
    const overlay = document.createElement('DIV');
    overlay.appendChild(img);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        overlay.remove(); //Método de javascript para eliminar el elemento
        img.remove();
    }

    const body = document.querySelector('body');
    body.appendChild(overlay);

}

const reproducirAudio = () => {

    const firstLayer = document.getElementById('Capa1');
    const secondLayer = document.getElementById('Capa2');
    const thirdLayer = document.getElementById('Capa3');
    const fourthLayer = document.getElementById('Capa4');
    const fifthLayer = document.getElementById('Capa5');
    const sixthLayer = document.getElementById('Capa6');
    const seventhLayer = document.getElementById('Capa7');

    const audio1 = new Audio('../../sounds/The_First_Layer.mp3');
    const audio2 = new Audio('../../sounds/Made_in_Abyss.mp3');
    const audio3 = new Audio('../../sounds/To_the_Abyss.mp3');
    const audio4 = new Audio('../../sounds/The_Fourth_Layer.mp3');
    const audio5 = new Audio('../../sounds/Dawn_of_the_deep_soul.mp3');
    const audio6 = new Audio('../../sounds/Made_in_Abyss_Op_2.mp3');
    const audio7 = new Audio('../../sounds/Made_in_Abyss_Ending_2.mp3');

    const arreglo = [firstLayer, secondLayer, thirdLayer, fourthLayer, fifthLayer, sixthLayer, seventhLayer];

    arreglo.forEach(Capa => {
        Capa.addEventListener('mouseenter', event => {
            
            switch(event.target.id) {
                case 'Capa1': 
                    desmutear(audio1);   
                break;

                case 'Capa2':
                    desmutear(audio2);
                break;

                case 'Capa3':
                    desmutear(audio3);
                break;

                case 'Capa4':
                    desmutear(audio4);
                break;

                case 'Capa5':
                    desmutear(audio5);
                break;

                case 'Capa6':
                    desmutear(audio6);
                break;

                case 'Capa7':
                    desmutear(audio7);
                break;

                default:

                console.error('No se pudo encontrar ningún audio');

                break;

            }

        });
    });

    arreglo.forEach(Capa => {
        Capa.addEventListener('mouseleave', event => {
            
            switch(event.target.id) {
                case 'Capa1': 
                    mutear(audio1);   
                break;

                case 'Capa2':
                    mutear(audio2);
                break;

                case 'Capa3':
                    mutear(audio3);
                break;

                case 'Capa4':
                    mutear(audio4);
                break;

                case 'Capa5':
                    mutear(audio5);
                break;

                case 'Capa6':
                    mutear(audio6);
                break;

                case 'Capa7':
                    mutear(audio7);
                break;

                default:

                console.error('No se pudo encontrar ningún audio');

                break;
            }

        });
    });

}

const desmutear = (audio) => {
    
    console.log(audio);

    audio.play();

}

const mutear = (audio) => {

    audio.pause();

}