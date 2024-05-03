// MenuDesktop.js

import React from "react";
import { useMediaQuery } from 'react-responsive';
import MenuDesktopDesktop from './Menu-Desktop';
import MenuMobile from "./Menu-mobile";
// Importe a versão desktop

const MenuDesktopMobile = ({ changeLanguage }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {isDesktop ? (
        <MenuDesktopDesktop changeLanguage={changeLanguage} />
      ) : (
        <MenuMobile changeLanguage={changeLanguage}/>
      )}
    </>
  );
};

export default MenuDesktopMobile;
