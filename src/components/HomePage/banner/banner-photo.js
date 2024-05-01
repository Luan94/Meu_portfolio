import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ImageSrc from '../../../assets/images/AboutMe/profile-pic.png';



  

const Image = styled.img`
  ${tw`rounded-full w-1/2`}
  object-fit: cover;
  max-width: 100%;
  background:transparent;
  outline: 4px solid white;
  outline-offset: 7px;
`;

const ColumnPhoto = styled.div`
  ${tw`w-full`}
`;


const CatchPhrase = styled.p`
  ${tw`text-white mt-6`}
`;


const BannerPhoto = ({ language }) => {
return (
  <ColumnPhoto>
      <Image src={ImageSrc} alt="LuanPhoto" />
  </ColumnPhoto>
);
};

export default BannerPhoto;