import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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

const Logo = styled.img`
  max-width: 150px;
`;

const LanguageButtonWrapper = styled.div`
  ${tw`outline outline-white outline-1 rounded `}
`;

const LanguageSwitchComponent = styled.div`
  ${tw`flex items-center`}
`;

const LanguageButton = styled.div`
  ${tw`text-white inline-block p-2`}
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : 'white')};

  &:hover {
    color: black;
    background: white;
  }
`;

const MenuDesktop = ({ changeLanguage }) => {
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
        <Logo src="/logo.png" alt="Logo" />
        
        <div>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#about-me">About</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </div>
        <LanguageSwitchComponent>
          <FontAwesomeIcon icon={faGlobe} style={{ color: 'white', marginRight: '10px', cursor: 'pointer' }} />
          <LanguageButtonWrapper>       
            <LanguageButton
              onClick={() => handleLanguageChange("portugues")}
              aria-label="Mudar para Português"
              active={language === "portugues"}
            >
              PT-BR
            </LanguageButton>
            <LanguageButton
              onClick={() => handleLanguageChange("ingles")}
              aria-label="Mudar para Inglês"
              active={language === "ingles"}
            >
              ENG
            </LanguageButton>
          </LanguageButtonWrapper>
        </LanguageSwitchComponent>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default MenuDesktop;
