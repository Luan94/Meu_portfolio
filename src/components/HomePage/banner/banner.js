import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TypewriterHook from '../../../hooks/TypeWriter';
import CircleImage from '../../../assets/images/banner/circle.png';
import SemiCircleImage from '../../../assets/images/banner/semi-circle.png';
import DotsImage from '../../../assets/images/banner/dots.png';
import backgroundImage from '../../../assets/images/banner/bg-coding-3.jpg';

const BannerContainer = styled.div`
  ${tw`relative h-screen overflow-hidden flex flex-col justify-center items-center`}
`;

const BackgroundImage = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full bg-cover`}
  background-image: url(${backgroundImage});
  filter: blur(4px) grayscale(95%);
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

const ParallaxImage = styled.img`
  ${tw`absolute`}
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  opacity: 0.5;
`;

const TextContainer = styled.div`
  ${tw`absolute text-left z-10 text-white`}
  left: 10%;
`;

const Title = styled.h1`
  ${tw`text-4xl md:text-6xl lg:text-6xl mb-4 text-left`}
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TypewriterStyled = styled.div`
  ${tw`text-base md:text-lg lg:text-xl mb-4 overflow-hidden whitespace-nowrap relative`}
  height: 40px;
`;

const randomPosition = () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
});

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([]);

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
    const newImages = Array.from({ length: 10 }).map(() => {
      const position = randomPosition();
      return position;
    });
    setImages(newImages);
  }, []);

  return (
    <BannerContainer>
      <BackgroundImage />
      <TextContainer>
        <Title>Luan Vilas Boas</Title>
        {/* Aplicando os estilos ao hook Typewriter */}
        <TypewriterStyled>
          <TypewriterHook text="Fullstack Web Developer" delay={100} />
        </TypewriterStyled>      
      </TextContainer>
      {images.map((position, index) => {
        let imageSrc;
        switch (index % 3) {
          case 0:
            imageSrc = CircleImage;
            break;
          case 1:
            imageSrc = SemiCircleImage;
            break;
          case 2:
            imageSrc = DotsImage;
            break;
          default:
            break;
        }
        const mouseX = mousePosition.x;
        const mouseY = mousePosition.y;
        const bannerWidth = window.innerWidth;
        const bannerHeight = window.innerHeight;
        const sensitivity = 450;

        const deltaX = (bannerWidth / 2 - mouseX) / sensitivity;
        const deltaY = (bannerHeight / 2 - mouseY) / sensitivity;

        return (
          <ParallaxImage
            key={index}
            src={imageSrc}
            top={position.top + deltaY}
            left={position.left + deltaX}
          />
        );
      })}
    </BannerContainer>
  );
};

export default Banner;
