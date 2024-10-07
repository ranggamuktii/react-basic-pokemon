import { useState } from 'react';

import defaultImage from '../../assets/pokemon-not-found.png';

import pokemonJSON from '../../data/pokemon.json';
import PokemonItem from '../PokemonItem/PokemonItem';

import './PokemonList.css';

const PokemonList = () => {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (event) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value);
    });

    setFilterPokemons(search);
  };

  return (
    <div>
      <input type="text" placeholder="cari pokemon kamu..." className="search" onChange={handleSearch} />
      <div className="list-pokemon">
        {/* {pokemons.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
        ))} */}

        {filterPokemons.length == 0 ? (
          <div>
            <img src={defaultImage} alt="Data Tidak Ditemukan" width={350} />
          </div>
        ) : (
          filterPokemons.map((item) => <PokemonItem key={item.id} pokemon={item} />)
        )}
      </div>
    </div>
  );
};

export default PokemonList;
