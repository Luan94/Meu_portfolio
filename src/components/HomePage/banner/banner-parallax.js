import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CircleImage from '../../../assets/images/banner/circle.png';
import SemiCircleImage from '../../../assets/images/banner/semi-circle.png';
import DotsImage from '../../../assets/images/banner/dots.png';

const ParallaxImage = styled.img`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  transform: translate(-50%, -50%);
  filter: grayscale(100%);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
  width:120px;
`;

const generateImages = () => {
  return Array.from({ length: 10 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
};

const BannerParallax = ({ mousePosition }) => {
  const [imagesGenerated, setImagesGenerated] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!imagesGenerated) {
      console.log("Generating images...");
      setImages(generateImages());
      setImagesGenerated(true);
    }
  }, []);

  return (
    <>
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

        const bannerWidth = window.innerWidth;
        const bannerHeight = window.innerHeight;
        const sensitivity = 450;

        const deltaX = (bannerWidth / 2 - mousePosition.x) / sensitivity;
        const deltaY = (bannerHeight / 2 - mousePosition.y) / sensitivity;

        return (
          <ParallaxImage
            key={index}
            src={imageSrc}
            top={position.top + deltaY}
            left={position.left + deltaX}
          />
        );
      })}
    </>
  );
};

export default BannerParallax;
