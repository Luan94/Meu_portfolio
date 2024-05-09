import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BannerBackground from './banner-background';
import BannerParallax from './banner-parallax';
import BannerTitlePhotoWrapper from './banner-text-photo-container';

// Definindo as propriedades do componente Banner
interface BannerProps {
  language: string;
}

// Estilizando o container do banner
const BannerContainer = styled.div`
  position: relative;
  height: 110vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Componente Banner
const Banner: React.FC<BannerProps> = ({ language }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagesGenerated, setImagesGenerated] = useState(false);

  // Atualizando a posição do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Verificando se as imagens foram geradas
  useEffect(() => {
    if (!imagesGenerated) {
      setImagesGenerated(true);
    }
  }, [imagesGenerated]);

  return (
    <BannerContainer id="banner-wrapper">
      <BannerBackground/>
      <BannerParallax mousePosition={mousePosition} />
      <BannerTitlePhotoWrapper language={language}/>
    </BannerContainer>
  );
};

export default Banner;
