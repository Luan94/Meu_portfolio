import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ImageSrc from '../../../assets/images/AboutMe/profile-photo.png';


  

const Image = styled.img`
  ${tw`rounded-full w-3/5`}
  object-fit: cover;
  max-width: 100%;
  background:transparent;
  outline: 4px solid white;
  outline-offset: 7px;
  
`;

const ColumnPhoto = styled.div`
  ${tw`w-full`}
`;





const BannerPhoto = () => {
    return (

<ColumnPhoto>
    <Image src={ImageSrc} alt="Your Name" />
</ColumnPhoto>
);
};

export default BannerPhoto;