import React from 'react';
import styled, { keyframes } from 'styled-components';

const CircleImageSrc = require('../../assets/images/banner/circle.webp') as string;
const SemiCircleImageSrc = require('../../assets/images/banner/semi-circle.webp') as string;
const DotsImageSrc = require('../../assets/images/banner/dots.webp') as string;

interface BannerParallaxProps {
  containerWidth: number;
}


//Velocidade da animação de movimento
const randomDirection = () => (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 12);


const moveAnimation = keyframes`
  0%, 100% {
    transform: translate(${randomDirection()}px, ${randomDirection()}px);
  }
  50% {
    transform: translate(${-randomDirection()}px, ${-randomDirection()}px);
  }
`;

const ParallaxImage = styled.img`
  position: absolute;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
  width: 8rem;
  animation: ${moveAnimation} 10s linear infinite; // Aplicando a animação

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

const BannerParallax: React.FC<BannerParallaxProps> = ({ containerWidth }) => {
  const positions = [
    { top: '10%', left: '10%' },
    { top: '20%', left: '30%' },
    { top: '30%', left: '50%' },
    { top: '40%', left: '70%' },
    { top: '50%', left: '90%' },
    { top: '30%', left: '10%' },
    { top: '50%', left: '30%' },
    { top: '70%', left: '50%' },
    { top: '90%', left: '70%' },
    { top: '70%', left: '10%' },
    { top: '90%', left: '30%' },
    { top: '10%', left: '70%' },
  ];

  const images = [
    { src: CircleImageSrc, alt: 'parallax-circle-img' },
    { src: SemiCircleImageSrc, alt: 'parallax-semi-circle-img' },
    { src: DotsImageSrc, alt: 'parallax-dots-img' },
  ];

  return (
    <div>
      {positions.map((position, index) => (
        <div key={index}>
          <ParallaxImage
            aria-label={`parallax-img-${index}`}
            src={images[index % 3].src}
            alt={`${images[index % 3].alt}-${index}`}
            style={position}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerParallax;
