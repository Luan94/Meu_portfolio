import React from "react";
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './Menu-Desktop';
import MobileMenu from "./Menu-mobile";

interface Props {
  changeLanguage: (lang: string) => void;
}

const ResponsiveMenu: React.FC<Props> = ({ changeLanguage }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      {isDesktop ? (
        <DesktopMenu changeLanguage={changeLanguage} />
      ) : (
        <MobileMenu changeLanguage={changeLanguage} />
      )}
    </div>
  );
};

export default ResponsiveMenu;
