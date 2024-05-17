import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import LanguageSwitch from "./Menu-LanguageButton";
import MenuData from '../../../data/menu-items.json'
import translationUtils from "../../../utils/translationUtils";
import { Link } from 'react-router-dom';
import tw from 'twin.macro';


interface MenuState {
  isOpen: boolean;
  language: string;
}

const MobileMenuWrapper = styled.div`
${tw`bg-zinc-950 shadow-md`}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
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

const MenuItem = styled.div`
  color: white; 
  font-weight: 600;
  text-decoration: none;
  margin: 1rem 0; 
  display: block; 
  font-size: 1.2rem; 

  &:hover {
    color: gray;
  }
`;

const LogoMobile = styled.img`
  max-width: 100px;
`;

interface Props {
  changeLanguage: (lang: string) => void;
}

const MenuMobile: React.FC<Props> = ({ changeLanguage }) => {
  
  const Logo = require('../../../assets/logos/Logo.webp') as string;

  const [menuState, setMenuState] = useState<MenuState>({
    isOpen: false,
    language: localStorage.getItem('language') || 'portugues'
  });

  const handleMenuToggle = () => {
    setMenuState({ ...menuState, isOpen: !menuState.isOpen });
  };

  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage || 'portugues';
  });

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    changeLanguage(lang);
    localStorage.setItem('language', lang);
    setMenuState({ ...menuState, language: lang });
  };

  return (
    <div>
      <div className="menu-mobile-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', zIndex: 1000 }}>
        <Link to="/portfolio"><LogoMobile src={Logo} alt="Logo"/></Link>
        <FontAwesomeIcon icon={menuState.isOpen ? faTimes : faBars} onClick={handleMenuToggle} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem' }} /> 
        <LanguageSwitch language={menuState.language} handleLanguageChange={handleLanguageChange} />
      </div>
      {menuState.isOpen && (
        <MobileMenuWrapper>
          <MobileMenuContainer>
            <MobileMenuItems>
              {Object.keys(MenuData).map((key) => (
                <Link to={MenuData[key].link} key={key}>
                <MenuItem>
                  {translationUtils('menu_item_language', language, MenuData[key])}
                </MenuItem>
                </Link>
              ))}
            </MobileMenuItems>
          </MobileMenuContainer>
        </MobileMenuWrapper>
      )}
    </div>
  );
};

export default MenuMobile;
