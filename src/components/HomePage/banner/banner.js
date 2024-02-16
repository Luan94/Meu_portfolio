import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Importar imagens PNG
import CircleImage from '../../../assets/images/banner/circle.png';
import SemiCircleImage from '../../../assets/images/banner/semi-circle.png';
import DotsImage from '../../../assets/images/banner/dots.png';
import backgroundImage from '../../../assets/images/banner/bg-coding.jpg';

const texts = ['texto1', 'faa', 'tssq3', 'tqqq'];

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Alterado para adicionar o parágrafo abaixo do título */
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const ParallaxImage = styled.img`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  opacity: 0.5;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 5%;
  z-index: 1;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  overflow: hidden; /* Impede que o texto seja exibido antes da animação começar */
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  position: relative;
`;

const TextAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const ReverseTextAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const BlinkAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const BlinkingCursor = styled.span`
  animation: ${BlinkAnimation} 1s steps(1) infinite;
  position: absolute;
  right: 0;
`;

const Text = styled.span`
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  animation: ${TextAnimation} 2s steps(20, end), ${ReverseTextAnimation} 2s steps(20, end) 4s infinite;
`;

const randomPosition = () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
});

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000); // Troca de texto a cada 7 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BannerContainer>
      <BackgroundImage />
      <TextContainer>
        <Title>Welcome to our website</Title>
        <Paragraph>
          <Text>{texts[currentTextIndex]}</Text>
          <BlinkingCursor>|</BlinkingCursor>
        </Paragraph>
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
        const sensitivity = 450; // Sensibilidade do movimento do mouse

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
