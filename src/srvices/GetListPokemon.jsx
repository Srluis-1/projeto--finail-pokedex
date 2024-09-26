import axios from "axios";

async function GetListPokemon(offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    
    const pokemonList = response.data.results

    const pokemonDetailsPromises = pokemonList.map(async(pokemon) => {
        const detailsResponse = await axios.get(pokemon.url)
        const details = detailsResponse.data

        return{
            name: details.name,
            id: details.id,
            image:details.sprites.front_default
        }
    })

    const pokemonDetails = await Promise.all(pokemonDetailsPromises)

    return pokemonDetails
}

export {GetListPokemon}