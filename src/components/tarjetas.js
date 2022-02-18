import voltearTarjeta from './voltearTarjeta.js';
import memoryFunctions from '../memoryFunctions.js';

const tarjetas = (data) => {
    //creando tarjetas
    let tarjeta = '';
    for (let i = 0; i < data.length; i++) {
        tarjeta += `<div class="memory-card" data-name=${data[i].id}><img class="front-face" src=${data[i].image}><img class="back-face" src="../images/conan.png"/></div>`
    }
    document.getElementById('root').innerHTML = tarjeta + tarjeta;

    //aplicacion estilo flip
    const tarjetas = document.querySelectorAll('.memory-card');
    tarjetas.forEach((tarjeta) => tarjeta.addEventListener('click', voltearTarjeta));
    //aplicación de barajado
    return memoryFunctions.shuffle(tarjetas);
    
}



export default tarjetas;