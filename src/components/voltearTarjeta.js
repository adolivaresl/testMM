import evaluarMatch from './conPareja.js';

let tableroBloqueado = false;
let primeraTarjeta, segundaTarjeta;
let haVolteadoTarjeta = false;

const voltearTarjeta = (e) => {
    if (tableroBloqueado) return;
    if (e.target.parentElement === primeraTarjeta) return;
    e.target.parentElement.classList.toggle('flip');

    if (!haVolteadoTarjeta) {
        haVolteadoTarjeta = true;
        primeraTarjeta = e.target.parentElement;
    } else {
        haVolteadoTarjeta = false;
        segundaTarjeta = e.target.parentElement;
        evaluarMatch(primeraTarjeta, segundaTarjeta, tableroBloqueado);
    }
}

export default voltearTarjeta;