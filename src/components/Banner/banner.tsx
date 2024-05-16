import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BannerBackground from './banner-background';
import BannerParallax from './banner-parallax';
import BannerTitlePhotoWrapper from './banner-text-photo-container';

interface BannerProps {
  language: string;
}

const BannerContainer = styled.div`
  position: relative;
  height: 110vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner: React.FC<BannerProps> = ({ language }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      const width = document.getElementById('banner-wrapper')?.offsetWidth || 0;
      setContainerWidth(width);
    };

    window.addEventListener('resize', updateContainerWidth);
    updateContainerWidth(); // Initial width

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  return (
    <BannerContainer id="banner-wrapper">
      <BannerBackground/>
      <BannerParallax containerWidth={containerWidth}/>
      <BannerTitlePhotoWrapper language={language}/>
    </BannerContainer>
  );
};

export default Banner;
