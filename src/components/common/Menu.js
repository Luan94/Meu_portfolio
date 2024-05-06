// MenuDesktop.js

import React from "react";
import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './Menu-Desktop';
import MobileMenu from "./Menu-mobile";

/**
 * Componente responsivo que renderiza a versão desktop ou móvel do menu com base no tamanho da tela.
 * @param {function} changeLanguage - Função para alterar o idioma do menu.
 * @returns {JSX.Element} Componente de menu responsivo.
 */
const ResponsiveMenu = ({ changeLanguage }) => {
  // Verifica se a tela é de desktop (largura mínima de 768 pixels)
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {/* Renderiza a versão desktop se a tela for de desktop, caso contrário, renderiza a versão móvel */}
      {isDesktop ? (
        <DesktopMenu changeLanguage={changeLanguage} />
      ) : (
        <MobileMenu changeLanguage={changeLanguage} />
      )}
    </>
  );
};

export default ResponsiveMenu;
