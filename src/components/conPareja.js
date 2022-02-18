import noVoltear from './sinPareja.js';
import desabilitarTarjeta from './desabilitar.js';

const evaluarMatch = (primeraTarjeta, segundaTarjeta, tableroBloqueado) => {
    let emparejar = primeraTarjeta.dataset.name === segundaTarjeta.dataset.name;
    emparejar ? desabilitarTarjeta(primeraTarjeta, segundaTarjeta) : noVoltear(primeraTarjeta, segundaTarjeta, tableroBloqueado);
}

export default evaluarMatch;