//Función que baraja las cartas.
const memoryFunctions = {

  shuffle: (tarjetas) => {
    return tarjetas.forEach((tarjeta) => {
          let randomPos = Math.floor(Math.random()*9);
          tarjeta.style.order = randomPos;
      });
  },
}



export default memoryFunctions;

