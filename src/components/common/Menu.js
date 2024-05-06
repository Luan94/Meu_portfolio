import React from "react";
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './Menu-Desktop';
import MobileMenu from "./Menu-mobile";


const ResponsiveMenu = ({ changeLanguage }) => {

  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
     
      {isDesktop ? (
        <DesktopMenu changeLanguage={changeLanguage} />
      ) : (
        <MobileMenu changeLanguage={changeLanguage} />
      )}
    </>
  );
};

export default ResponsiveMenu;
