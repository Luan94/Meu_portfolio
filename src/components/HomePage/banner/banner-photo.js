import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import ImageSrc from '../../../assets/images/AboutMe/profile-pic.png';

const gradientAnimation = keyframes`
  0% {
    outline-color: #ffffff;
    background-position: 0% 50%;
  }
  50% {
    outline-color: gray;
    background-position: 100% 50%;
  }
  100% {
    outline-color: #f0f0f0;
    background-position: 0% 50%;
  }
  
`;

const Image = styled.img`
  ${tw`rounded-full w-1/2`}
  object-fit: cover;
  max-width: 100%;
  background: linear-gradient(90deg, #ffffff, #FF6347); 
  outline: 4px solid transparent; 
  outline-offset: 7px;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 5s linear infinite;
`;

const ColumnPhoto = styled.div`
  ${tw`w-full`}
`;

const BannerPhoto = ({ language }) => {
  return (
    <ColumnPhoto>
      <Image src={ImageSrc} alt="LuanPhoto" />
    </ColumnPhoto>
  );
};

export default BannerPhoto;
