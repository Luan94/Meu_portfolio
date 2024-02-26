import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BannerBackground from './banner-background';
import BannerParallax from './banner-parallax';
import BannerTitle from './banner-title';

const BannerContainer = styled.div`
  position: relative;
  height: 110vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = () => {
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
      <BannerBackground />
      <BannerTitle />
      <BannerParallax mousePosition={mousePosition} />
    </BannerContainer>
  );
};

console.log('Banner Wrapper')
export default Banner;
