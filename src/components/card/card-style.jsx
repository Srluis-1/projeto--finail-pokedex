import styled from "styled-components"


  export const Div = styled.div`
  width: 200px;
  height: 250px;
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(35, 38, 35, 0.5);
  border: solid 2px #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 130%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
    z-index: -1;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .color{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #07182E;
    width: 190px;
    height: 300px;
    border-radius: 15px;
  }

  .pokemon-image {
    z-index: 1;
    border-radius: 15px;
    min-width: 130px;
    min-height: 130px; 
    background-color: #fff; 
    border: solid 2px #1a1a1a;
  }

  .info {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info .pokemon-info {
    color:#fff;
    text-transform: capitalize;
  }

  .pokemon-info.pokemon-name {
    font-size: 26px;
  }

  .pokedex-deco-top {
    z-index: 1;
    display: flex;
    justify-content: center; 
    align-items: center;
    position: relative;
    top: -5px;
  }
    
  .pokedex-deco-button .stripes {
    width: 20px;
    height: 2px;
    background-color: #1a1a1a;
    margin: 10px;
    position: relative;
  }

  .pokedex-deco-button .stripes::before,
  .pokedex-deco-button .stripes::after { 
    content: "";
    width: 20px;
    height: 2px;
    background-color: #1a1a1a;
    position: absolute;
  }

  .pokedex-deco-button .stripes::before {
    top: 5px;
  }

  .pokedex-deco-button .stripes::after {
    bottom: 5px;
  }
`;