import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { getDataPokemon } from "../srvices/GetdataPokemon";
import { ThemeContext } from "../context/themeToggler";
import { Container } from "../style/pokemon-details-style";

const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext);
    const { pokemon } = useParams(); 
    const navigate = useNavigate();

    const [pokeInfos, setPokeInfos] = useState({
        abilities: [],
        types: [],
        moves: []
    });

    const fetchData = async (pokeName) => {
        try {
            const pokeData = await getDataPokemon(pokeName);  
            setPokeInfos(pokeData); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (pokemon) {
            fetchData(pokemon);  
        }
    }, [pokemon]);

    const navigatePokemon = async (type) => {
        try {
            let newPokeData;
            let newPokeName;

            if (type === "prev") {
              
                let prevId = pokeInfos.prevPokemon === 10000 ? 1025 : pokeInfos.prevPokemon;
                newPokeData = await getDataPokemon(prevId);
            } else if (type === "next") {
            
                let nextId = pokeInfos.nextPokemon === 1026 ? 10001 : pokeInfos.nextPokemon;
                newPokeData = await getDataPokemon(nextId);
            }

            if (newPokeData) {
        
                navigate(`/pokemon-info/${newPokeData.name}`);
            
                setPokeInfos(newPokeData);
            }
        } catch (error) {
            console.error('Error navigating to Pokémon:', error);
        }
    };

    return (
        <Container theme={theme}>
            <div className="main">
                <div className="nav-btns">
                    <button
                        className="prev-btn nav-btn"
                        onClick={() => navigatePokemon("prev")}
                        disabled={pokeInfos.prevPokemon === 0}
                    >
                        <span> N° {pokeInfos.prevPokemon}</span>
                        <h3 className="prev-pokemon-name">Prev Pokémon</h3>
                    </button>

                    <button
                        className="next-btn nav-btn"
                        onClick={() => navigatePokemon("next")}
                        disabled={pokeInfos.nextPokemon === 10278}
                    >
                        <h3 className="next-pokemon-name">Next Pokémon</h3>
                        <span> N° {pokeInfos.nextPokemon}</span>
                    </button>
                </div>

                <div className="pokemon-name">
                    <h1>
                        <span className="span">{pokeInfos.name}</span>
                        N° {pokeInfos.pokedexId}
                    </h1>
                </div>

                <div className="images">
                    <h2>{pokeInfos.name}'s visuals</h2>
                    {pokeInfos.frontImg ? (
                        <>
                            <p className="img-alt">Normal {pokeInfos.name}'s front and back view</p>
                            <img src={pokeInfos.frontImg} alt={pokeInfos.name} />
                        </>
                    ) : (
                        <p>{pokeInfos.name}'s front view not available</p>
                    )}

                    {pokeInfos.backImg ? (
                        <img src={pokeInfos.backImg} alt={`${pokeInfos.name}'s back`} />
                    ) : (
                        <p>{pokeInfos.name}'s back view not available</p>
                    )}

                    {pokeInfos.frontShinyImg ? (
                        <img src={pokeInfos.frontShinyImg} alt={`${pokeInfos.name} Shiny`} />
                    ) : (
                        <p>Shiny {pokeInfos.name}'s front view not available</p>
                    )}

                    {pokeInfos.backShinyImg ? (
                        <>
                            <img src={pokeInfos.backShinyImg} alt={`${pokeInfos.name} Shiny's back`} />
                            <p className="img-alt">Shiny {pokeInfos.name}'s front and back view</p>
                        </>
                    ) : (
                        <p>Shiny {pokeInfos.name}'s back view not available</p>
                    )}
                </div>

                <div className="infos-container">
                    <div className="info-chart">
                        <h3>Pokédex Number: <span># {pokeInfos.pokedexId}</span></h3>
                        <ul>
                            <h3>Abilities</h3>
                            {pokeInfos.abilities.map((ability, index) => (
                                <li key={index}>
                                    <h4>{ability.name}</h4>
                                    <p>{ability.effect}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="types">
                        <h3>Type{pokeInfos.types.length > 1 ? 's' : ''}</h3>
                        <ul>
                            {pokeInfos.types.map((type, index) => (
                                <li key={index} className={`type ${type.type.name}`}>
                                    <p>{type.type.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="moves">
                    <h2>Move List</h2>
                    <p>List of all {pokeInfos.name}'s moves</p>
                    <ul>
                        {pokeInfos.moves.map((move, index) => (
                            <li key={index}>{move.move.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export { PokemonDetails };