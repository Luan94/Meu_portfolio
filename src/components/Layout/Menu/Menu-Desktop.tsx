import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from 'twin.macro';
import LanguageSwitch from "./Menu-LanguageButton";
import MenuData from '../../../data/menu-items.json';
import translationUtils from "../../../utils/translationUtils";
import { Link } from 'react-router-dom';


interface ScrollState {
  prevScrollPos: number;
  isVisible: boolean;
}

const MenuWrapper = styled.div`
${tw`bg-zinc-950 shadow-md`}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.3s;
  z-index: 999;
  padding: 10px;
  &.hidden {
    top: -100%;
  }
`;

const MenuContainer = styled.nav`
  ${tw`container mx-auto`}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  color: white;
  font-weight: 600;
  text-decoration: none;
  margin-right: 1.5rem;
  transition: color 0.3s;
  padding: 1rem 0.3rem 1rem 0.3rem;

  &:hover {
    color: gray;
  }
`;

const NavWrapper = styled.div`
  display:flex;
`;

const LogoImg = styled.img``;

interface Props {
  changeLanguage: (lang: string) => void;
}

const MenuDesktopDesktop: React.FC<Props> = ({ changeLanguage }) => {
  
  const Logo = require('../../../assets/logos/Logo.webp') as string;

  const [scrollState, setScrollState] = useState<ScrollState>({
    prevScrollPos: 0,
    isVisible: true
  });

  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'portugues';
  });

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const isVisible = scrollState.prevScrollPos > currentScrollPos || currentScrollPos === 0;
      setScrollState({ prevScrollPos: currentScrollPos, isVisible });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <MenuWrapper className={!scrollState.isVisible ? "hidden" : ""}>
      <MenuContainer>
      <Link to="/portfolio"><LogoImg src={Logo} alt="Logo"/></Link>
        <NavWrapper>
          {Object.keys(MenuData).map((key) => (
            <Link to={MenuData[key].link} key={key}>
            <MenuItem>
              {translationUtils('menu_item_language', language, MenuData[key])}
            </MenuItem>
            </Link>
          ))}
        </NavWrapper>
        <LanguageSwitch language={language} handleLanguageChange={handleLanguageChange} />
      </MenuContainer>
    </MenuWrapper>
  );
};

export default MenuDesktopDesktop;
