import { useState, useEffect, useContext } from "react";
import { CardList } from "../components/cardList";
import { ThemeTogglerButton } from "../components/themeTogglerButton/themeTogglerButton";
import { ThemeContext } from "../context/themeToggler";
import { Container } from "../style/home-style";
import { GetListPokemon } from "../srvices/GetListPokemon";
import filter from "../components/imagens/filter-icon-white.png"

export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [pokeData, setPokeData] = useState([])

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const fetchData = async () => {
                    const pokemonData = await GetListPokemon(offset)
    
                    setPokeData(pokemonData);
                    setOffset(offset + 10)
                }
                fetchData()
            } catch (error) {
                console.error('Error fetching DATA:', error)
            } finally {
                setLoading(false)
            }
        }
        
    }, [])

    async function handleClick() {
        const newPokeData = await GetListPokemon(offset);
        setPokeData(prevPokeData => [...prevPokeData, ...newPokeData])
        setOffset(offset + 10)
    }

    return (
        <Container theme={theme}>
            <div className="main">
                <div className="title">
                    <h1>Pokedex</h1>
                    <div className="btns-container">
                        <ThemeTogglerButton />
                         <img src={filter} alt="filter icon" className="btn filter" onClick={() => alert('')} /> 
                    </div>
                </div>

                <span className="divider" />

                < div className="cards">
                <CardList pokemons={pokeData}/>
                </div>

                <div className="show-more">
                    <button onClick={handleClick}>
                        {loading ? 'Loading....' :'Show more Pokémon'}
                    </button>
                </div>
            </div>
        </Container>
    )

}

