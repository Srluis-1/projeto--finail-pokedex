import styled from "styled-components";
import { Link } from "react-router-dom";



export const Header = () => {
    return(
        <Container>
            <Link to="/">
            <div className="title" title="Home">
            <h1>Pokedex-porjeto</h1>
            </div>
            </Link>
        </Container>
    )
}
const Container = styled.header`
        width: 100%;
        height: 90px;
        background-color: #fc2f51;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        position: sticky;
        top: 0;
        z-index:10;

    .title {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #FFFFFF;
        font-size: 20px;
        transition: 0.3s ease;
    }
    
    .title img {
        height: 60px;
        border-radius: 50%;
    }

    .title:hover {
        transform: scale(1.02);
    }

    .title img {
        padding: 10px;
    }
`
