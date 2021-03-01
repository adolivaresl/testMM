import data from '../data/pokemon/pokemon.js';
//tarjetas pokemon
const dataPokemon = data.items;
const cardPokemons = () => {  
    // 1 Creamos la tarjeta pokemon  
    let cardPokemon = '';
    for(let i =0; i< dataPokemon.length; i++){
        // 2 Concatenamos todas las tarjetas
    cardPokemon += `<div class="memory-card" data-name=${dataPokemon[i].id}>
    
    <img class="front-face" src=${dataPokemon[i].image}>
    <img class="back-face" src="../images/back-card.png"/>
    </div>`
    }
    // 3 insertamos todas las tarjetas en el HTML(se concatenan 2 veces para que existan parejas)
    document.getElementById('root').innerHTML = cardPokemon + cardPokemon;
    
    // 4 Guardo todas las tarjetas para ir aplicándole el flipcard
    const cards = document.querySelectorAll('.memory-card');


    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    // 6 Funcion que guarda las 2 primeras cartas y le aplica la clase flip
const flipCard = (e) => {
    if(lockBoard) return;
    if(e.target.parentElement === firstCard) return;
    // Cada carta que escucha el click se le agrega el estilo 'flip' para que gire
    e.target.parentElement.classList.toggle('flip');

    if(!hasFlippedCard){
        // 6.1 guardamos la primera carta que escucha el click 
        hasFlippedCard = true;
        firstCard = e.target.parentElement;
        console.log(firstCard);
    }else{
        //6.2 guardamos la segunda carta que escucha el click
        hasFlippedCard = false;
        secondCard = e.target.parentElement;
        console.log(secondCard)
        // una vez que tenemos las dos cartas para hacer match llamamos a la función
        checkForMatch();
        
    }
}

// Función que evalua el match entre las cartas (First y Second)
const checkForMatch = () => {
    // La evaluación se va  a hacer por el atributo 'data-name' de cada carta que está asociada al nombre del personaje
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch? disableCards() : unflipCards();
}

// funcion que evita que vuelvan a girarse las cartas una vez que se encontró a su pareja. Personajes Iguales quedan visibles
const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// Función que vuelve a girar las cartas cuando no se encontraron las parejas.
const unflipCards = () => {
    lockBoard = true;
    // se agrega un tiempo para que vuelva a girarse las cartas
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}

//Función que baraja las cartas.
const shuffle = () => {
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random()*9);
        card.style.order = randomPos;
    });
};
shuffle();

// 5 a cada una de las cartar le asocio el evento de escuchar el click
cards.forEach((card) => card.addEventListener('click', flipCard))
    
}



export default cardPokemons;