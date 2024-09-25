import styled from "styled-components";
import { useContext } from "react";
import { themes } from "../../context/themeToggler";
import { ThemeContext } from "../../context/themeToggler";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
      <Button 
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} 
        theme={theme}>
          {theme === themes.light ? <FiMoon size={36} color="#2a2a2a" /> : <FiSun size={36}/>}
      </Button>
  );
}

const Button = styled.button`
   background: transparent;
   width: 50px;
   display: flex;
   border-radius: 50%;
   align-items: center; 
   justify-content: center;
   cursor: pointer;
   transition: transform 0.3s ease-in-out; 
   border: solid 2px ;

   &:hover {
     transform: scale(1.1); 
   }

   &:active {
     transform: scale(0.8);
   }
`;
