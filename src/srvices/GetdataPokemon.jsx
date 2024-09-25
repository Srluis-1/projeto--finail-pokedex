 import axios from "axios";
 async function getDataPokemon(pokemon) {
    const pokeData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)).data;

    const prevPokemon = pokeData.id - 1;
    const nextPokemon = pokeData.id + 1; 

    const abilityList = pokeData.abilities;

    const abilityListPromises = abilityList.map(async (ability) => {
        const abilityResponse = (await axios.get(ability.ability.url)).data;

        const abilityNameArray = abilityResponse.names.filter(abilityName => abilityName.language.name === "en");
        const abilityEffectArray = abilityResponse.effect_entries.filter(abilityEffect => abilityEffect.language.name === "en");

        const abilityName = abilityNameArray.length > 0 ? abilityNameArray[0].name : "Unknown";
        const abilityEffect = abilityEffectArray.length > 0 ? abilityEffectArray[0].effect : "no effect";

        return {
            name: abilityName,
            effect: abilityEffect
        };
    });

    const abilitiesDetails = await Promise.all(abilityListPromises);

    return {
        prevPokemon: prevPokemon,
        nextPokemon: nextPokemon,
        name: pokeData.name,
        pokedexId: pokeData.id,
        frontImg: pokeData.sprites.front_default,
        backImg: pokeData.sprites.back_default,
        frontShinyImg: pokeData.sprites.front_shiny,
        backShinyImg: pokeData.sprites.back_shiny,
        moves: pokeData.moves,
        abilities: abilitiesDetails,
        types: pokeData.types
    };
}
export  {getDataPokemon}