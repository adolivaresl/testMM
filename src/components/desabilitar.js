import flipCard from './voltearTarjeta.js';

const desabilitarTarjeta = (primeraTarjeta, segundaTarjeta) => {
    primeraTarjeta.removeEventListener('click', flipCard);
    segundaTarjeta.removeEventListener('click', flipCard);
}
export default desabilitarTarjeta;