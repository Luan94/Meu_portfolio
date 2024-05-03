// MenuDesktopDesktop.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from 'twin.macro';
import LanguageSwitch from "./Menu-LanguageButton";
import Logo from '../../assets/logos/Logo.png'

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.3s;
  background-color: black;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &.hidden {
    top: -100%;
  }
`;

const MenuContainer = styled.nav`
  ${tw`container mx-auto`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const MenuItem = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;
  margin-right: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const LogoImg = styled.img`
  
`;

const MenuDesktopDesktop = ({ changeLanguage }) => {
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [language, setLanguage] = useState(() => {
    // Inicializar o idioma a partir do localStorage ou usar "portugues" como padrão
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'portugues';
  });

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <MenuWrapper className={!isVisible ? "hidden" : ""}>
      <MenuContainer>
      <LogoImg src={Logo}/>

        <div>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#about-me">About</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </div>
        <LanguageSwitch language={language} handleLanguageChange={handleLanguageChange} />
      </MenuContainer>
    </MenuWrapper>
  );
};

export default MenuDesktopDesktop;
