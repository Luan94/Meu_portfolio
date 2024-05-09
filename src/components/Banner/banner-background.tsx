import React from 'react';
import styled from 'styled-components';




// Definindo as propriedades do componente BannerBackground
interface BannerBackgroundProps {}

// Estilizando o componente de fundo do banner

const backgroundImage = require('../../assets/images/banner/bg-coding-3.webp') as string;

const Background = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(4px) grayscale(95%);
`;

// Componente de fundo do banner
const BannerBackground: React.FC<BannerBackgroundProps> = () => {
  return <Background />;
};

export default BannerBackground;
