import styled from "styled-components";
export const Container = styled.div`
  & {
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
}

.main {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    position: relative;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    text-transform: capitalize;
    display: grid;
    grid-template-areas:
        "btns btns" 
        "name name" 
        "images infos" 
        "moves moves";
    grid-template-rows: 125px 50px auto auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}

.nav-btns {
    grid-area: btns;
    width: 80%;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    position: relative;
}


.nav-btns .nav-btn {
    color: #fafafa;
    text-transform: uppercase;
    border-radius: 10px;
    border: 10px solid #fafafa;
    background: #252525;
    box-shadow: 9px 9px #fafafa;
    cursor: pointer;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    font- size: 18px;
    transition: 0.2s;
}

.nav-btns .nav-btn:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}


.nav-btns .prev-btn {
    margin-right: 2.5px;
    padding-left: 15%;
    justify-content: flex-start;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.prev-btn span:first-of-type,
.next-btn span:last-of-type {
    margin: 20px;
}

.nav-btns .next-btn {
    margin-left: 2.5px;
    padding-right: 15%;
    justify-content: flex-end;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.pokemon-name {
border-radius: 10px;
    grid-area: name;
    padding: 20px;
    width: 450px;
     width:450px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: solid 3px #646464;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.pokemon-name h1 {
    color: #646464;
    font-size: 25px;
    text-align: center;
   
}

.pokemon-name h1 span {

    color:#646464;
}

.images {
    grid-area: images;
    margin-left: 20px;
    border-radius: 10px;
    width: 500px;
    height: 600px;
    box-shadow: 0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);
}

.images h2 {
    margin-bottom: 10px;
    font-size: 30px;
    text-align: center;
}

.images img {
    width: 250px;
    background-color: #908b8b;
    
}

.infos-container {
    grid-area: infos;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 25px;
}

.info-chart {
    color: #fff;
    width: 85%;
    background-color:#8e9090;
    border-radius: 10px;
    padding: 20px;
    height: fit-content;
}

.info-chart h4,
.info-chart h3 {
    color: #000;
}

.info-chart span {
    color: #ffffff;
    font-weight: 400;
}

.info-chart ul {
    margin-top: 20px;
}

.info-chart li p {
    text-transform: none;
    margin-bottom: 10px;
}

.types {
    background-color: #4c4f5b;
    width: 85%;
    margin-top: 25px;
    padding: 20px;
    border-radius: 10px;
}

.types h3 {
    margin-bottom: 15px;
    font-size: 24px;
    color: #fff;
}

.types ul {
    display: flex;
}

.moves {
    color: #fff;
    grid-area: moves;
    background-color: #454545;
    width: 90%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
}

.moves h2,
.moves p {
    margin-bottom: 10px;
}

.moves ul {
    display: flex;
    flex-wrap: wrap;
}

.moves ul li {
    background: url(${""}) no-repeat left center;
    padding-left: 24px;
    height: 24px;
    font-size: 16px;
    flex: 1 1 300px;
}

@media (max-width: 1500px) {
    .nav-btns::after {
        width: 43%;
    }
}

@media (max-width: 1200px) {
    .nav-btns::after {
        width: 40%;
    }
}

@media (max-width: 1000px) {
    .nav-btns::after {
        width: 37%;
    }
}

@media (max-width: 450px) {
    .nav-btns::after,
    .nav-btns .prev-btn::before,
    .nav-btns .next-btn::after {
        display: none;
    }

    .main {
        width: 100vw;
        padding: 0;
        grid-template-areas:
            "btns"
            "name"
            "images"
            "infos"
            "moves";
    }

    .nav-btns {
        width: 100vw;
    }

    .nav-btns .nav-btn {
        width: 200px;
        height: 100%;
        padding: 10px;
    }

    .prev-btn span:first-of-type,
    .next-btn span:last-of-type {
        margin: 10px;
    }

    .pokemon-name {
        width: 100%;
        height: fit-content;
        position: static;
        padding: 5px;
    }

    .images {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
    }

    .images img {
        margin: 0 auto;
    }
}
`
