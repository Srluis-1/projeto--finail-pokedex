import styled from "styled-components";
import { Card } from "../card";

export const CardList = ({ pokemons }) => {
    return (
        <Container>
            {pokemons.map((pokemon, index) => (
                <Card pokemon={pokemon} key={index}/>
            ))}
        </Container>
    )
}
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;