import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './List.css';

const PokemonList = () => {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState(null);

  const s = search && search.toLowerCase();
  const filtered =
    !pokemons || !s
      ? pokemons
      : pokemons.filter(({ name }) =>
          name.toLowerCase().includes(s)
        ); 

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((r) => r.json())
      .then((json) => {
        setPokemons(json.results);
      });
  }, []);

  if (!pokemons) {
    return null;
  }

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      {filtered && (
        <ul className="PokemonList">
          {filtered.map(({ name }) => (
            <Card key={name} name={name} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PokemonList;
