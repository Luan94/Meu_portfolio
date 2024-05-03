// MenuMobile.js

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import LanguageSwitch from "./Menu-LanguageButton";
import Logo from '../../assets/logos/Logo.png'

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  backdrop-filter: blur(5px); 
`;

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 8px;
`;

const MobileMenuItems = styled.div`
  text-align: center;
`;

const MenuItem = styled.a`
  color: white; 
  font-weight: 600;
  text-decoration: none;
  margin: 1rem 0; 
  display: block; 
  font-size: 1.2rem; 

  &:hover {
    color: red;
  }
`;

const LogoMobile = styled.img`
  max-width: 100px;
`;

const MenuMobile = ({ changeLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [language, setLanguage] = useState(() => {
    // Inicializar o idioma a partir do localStorage ou usar "portugues" como padrão
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'portugues';
  });

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', zIndex: 1000 }}>
      <LogoMobile src={Logo}/>

        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} onClick={handleMenuToggle} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} /> 
        <LanguageSwitch language={language} handleLanguageChange={handleLanguageChange} />
      </div>
      {isMenuOpen && (
        <MobileMenuWrapper>
          <MobileMenuContainer>
            <MobileMenuItems>
              <MenuItem href="#">Home</MenuItem>
              <MenuItem href="#about-me">About</MenuItem>
              <MenuItem href="#">Services</MenuItem>
              <MenuItem href="#">Contact</MenuItem>
            </MobileMenuItems>
          </MobileMenuContainer>
        </MobileMenuWrapper>
      )}
    </>
  );
};

export default MenuMobile;
