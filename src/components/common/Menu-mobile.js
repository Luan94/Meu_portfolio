// MenuMobile.js

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import LanguageSwitch from "./Menu-LanguageButton";
import Logo from '../../assets/logos/Logo.png';

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
  const [menuState, setMenuState] = useState({
    isOpen: false,
    language: localStorage.getItem('language') || 'portugues'
  });

  const handleMenuToggle = () => {
    setMenuState({ ...menuState, isOpen: !menuState.isOpen });
  };

  const handleLanguageChange = (lang) => {
    setMenuState({ ...menuState, language: lang });
    changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <>
      <div className="menu-mobile-header">
        <LogoMobile src={Logo}/>
        <FontAwesomeIcon icon={menuState.isOpen ? faTimes : faBars} onClick={handleMenuToggle} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} /> 
        <LanguageSwitch language={menuState.language} handleLanguageChange={handleLanguageChange} />
      </div>
      {menuState.isOpen && (
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
