import React, {
    useEffect,
    useState,
    useContext
  } from 'react';
  import { useParams } from 'react-router-dom';
  import AppContext from '../../AppContext/Context';
  import './View.css';
  
  const PokemonView = () => {
    const { setToPokedex } = useContext(AppContext);
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
          setToPokedex(resultPokemon);
          setPokemon(resultPokemon);
        });
    }, [name, setToPokedex]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="PokemonView">
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        Abilities
        <ul className="PokemonView__abilities">
          {pokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonView;
  