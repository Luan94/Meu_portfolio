import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BannerTitle from './banner-title';
import BannerPhoto from './banner-photo'; 

const TitlePhotoContainer = styled.div`
  ${tw`container mx-auto flex flex-col md:flex-row justify-between items-center relative`}
`;

const LeftColumn = styled.div`
  ${tw`w-full mb-4 md:mb-0 md:mr-4`}
  @media (max-width: 767px) {
    order: 2;
    margin-top:3rem;
    text-align-last: center;
  }
`;

const RightColumn = styled.div`
  ${tw`w-full text-center`}
  @media (max-width: 767px) {
    order: 1;
  }
`;

const BannerTitlePhotoWrapper = ({ language }) => {
  return (
    <TitlePhotoContainer id="banner-title-photo-wrapper">
      <LeftColumn>
        <BannerTitle/>
      </LeftColumn>
      <RightColumn>
        <BannerPhoto language={language}/>
      </RightColumn>
    </TitlePhotoContainer>
  );
};

export default BannerTitlePhotoWrapper;
