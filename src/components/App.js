// import addPokemonCards from './MemoryPokemon.js';
import tarjetas from './tarjetas.js';
import data from '../data/detective_conan/conan.js';
const App = () => {
  const conanData = data.items.slice();
  const el = document.createElement('div');

  el.className = 'App';
   el.appendChild(tarjetas(conanData));
   return el;
};

export default App;
