import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeToggler"
import { Div } from "./card-style";


export const Card = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Link to={`pokemon-info/${pokemon.name}`}>

            <Div theme={theme}>
                <div className="color">
                    {
                        pokemon.image ? (
                            <img className="pokemon-image" src={pokemon.image} alt={`image of ${pokemon.name}`} />
                        ) : (
                            <div className="pokemon-image">
                                <img src="" alt="No image available" />
                            </div>
                        )
                    }
                    <div className="info">
                        <h2 className="pokemon-info pokemon-name">{pokemon.name}</h2>
                        <p className="pokemon-info pokemon-number">Pokedex number: #{pokemon.id}</p>
                    </div>
                </div>
            </Div>
        </Link>
    )
}
