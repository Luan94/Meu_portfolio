import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BannerBackground from './banner-background';
import BannerParallax from './banner-parallax';
import TwoColumnComponent from './banner-text-photo-container';

const BannerContainer = styled.div`
  position: relative;
  height: 110vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = ({ language }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagesGenerated, setImagesGenerated] = useState(false);
  
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!imagesGenerated) {
      setImagesGenerated(true);
    }
  }, [imagesGenerated]);

  return (
    <BannerContainer>
      <BannerBackground/>
      <TwoColumnComponent language={language}/>
      <BannerParallax mousePosition={mousePosition} />
    </BannerContainer>
  );
};


export default Banner;
