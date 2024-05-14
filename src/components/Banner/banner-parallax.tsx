import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CircleImageSrc = require('../../assets/images/banner/circle.webp') as string;
const SemiCircleImageSrc = require('../../assets/images/banner/semi-circle.webp') as string;
const DotsImageSrc = require('../../assets/images/banner/dots.webp') as string;


interface BannerParallaxProps {
  mousePosition: { x: number; y: number };
}


const ParallaxImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
  width: 8rem;

  @media (max-width: 1440px) {
    width: 7rem;
  }

  @media (max-width: 1080px) {
    width: 6rem;
  }

  @media (max-width: 768px) {
    width: 8rem;
  }
`;


const generateImages = () => {
  return Array.from({ length: 10 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
};


const BannerParallax: React.FC<BannerParallaxProps> = ({ mousePosition }) => {
  const [images, setImages] = useState(generateImages());

  useEffect(() => {
    const handleResize = () => {
      setImages(generateImages());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {images.map((position, index) => {
        let imageSrc;
        switch (index % 3) {
          case 0:
            imageSrc = CircleImageSrc;
            break;
          case 1:
            imageSrc = SemiCircleImageSrc;
            break;
          case 2:
            imageSrc = DotsImageSrc;
            break;
          default:
            break;
        }

        const bannerWidth = window.innerWidth;
        const bannerHeight = window.innerHeight;
        const sensitivity = 450;

        const deltaX = (bannerWidth / 2 - mousePosition.x) / sensitivity;
        const deltaY = (bannerHeight / 2 - mousePosition.y) / sensitivity;

        return (
          <ParallaxImage
            key={index}
            src={imageSrc}
            style={{
              top: `${position.top + deltaY}%`,
              left: `${position.left + deltaX}%`,
            }}
          />
        );
      })}
    </>
  );
};

export default BannerParallax;
