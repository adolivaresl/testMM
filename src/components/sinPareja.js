
const noVoltear = (primeraTarjeta, segundaTarjeta, tableroBloqueado) => {
   //tableroBloqueado = true;
    // se agrega un tiempo para que vuelva a girarse las cartas
    setTimeout(() => {
        primeraTarjeta.classList.remove('flip');
        segundaTarjeta.classList.remove('flip');
        //tableroBloqueado = false;
    }, 1000);
}

export default noVoltear;