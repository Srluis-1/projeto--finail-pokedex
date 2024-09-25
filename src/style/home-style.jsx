import styled from "styled-components";

export const Container = styled.div`

    & {
    background-image: url(${""});
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
}

.main {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    width: 85%;
    margin: 0 auto;
}

.title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
}

.title h1 {
    color: #a70022;
    text-align: center;
    width: 75px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}
    
.title .btns-container {
    display: flex;
    justify-content: space-between;
    width: 170px;
}


.title .btns-container .btn {
    color: #fff;
    text-align: center;
     width: 50px;
    height: 50px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.title .btns-container .filter {
  width: 60x;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 1rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
}

.title .btns-container .filter::after {
  content: '';
  width: 50px;
  height: 50px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  filter: blur(15px);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}
.title .btns-container .filter:active {
  transform: scale(0.9);
  background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  transition: 0.5s;
}

.divider {
    display: block;
}

.show-more {
    display: flex;
    justify-content: center;
    padding: 50px;
}

.show-more button {
    background-color: #3f5efb;
    color: #fff;
    font-size: 20px;
    width: 300px;
    height: 75px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

@media (max-width: 450px) {
    .title {
        flex-direction: column;
    }

    .title h1 {
        margin-bottom: 30px;
    }

    .title .btns-container {
        width: 100%;
        justify-content: center;
    }

    .title .btns-container .btn {
        width: 60px;
        font-size: 12px;
    }
}


`