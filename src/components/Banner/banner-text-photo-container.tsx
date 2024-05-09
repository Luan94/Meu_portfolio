import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BannerTitle from './banner-title';
import BannerPhoto from './banner-photo';

// Estilização do contêiner do título e da foto
const TitlePhotoContainer = styled.div`
  ${tw`container mx-auto flex flex-col md:flex-row justify-between items-center relative`}
`;

// Estilização da coluna esquerda
const LeftColumn = styled.div`
  ${tw`w-full mb-4 md:mb-0 md:mr-4`}
  @media (max-width: 767px) {
    order: 2;
    margin-top:3rem;
    text-align-last: center;
  }
`;

// Estilização da coluna direita
const RightColumn = styled.div`
  ${tw`w-full text-center`}
  @media (max-width: 767px) {
    order: 1;
  }
`;

// Interface para definir o tipo das props
interface BannerTitlePhotoWrapperProps {
  language: string;
}

// Componente BannerTitlePhotoWrapper
const BannerTitlePhotoWrapper: React.FC<BannerTitlePhotoWrapperProps> = ({ language }) => {
  return (
    <TitlePhotoContainer id="banner-title-photo-wrapper">
      <LeftColumn>
        <BannerTitle />
      </LeftColumn>
      <RightColumn>
        <BannerPhoto />
      </RightColumn>
    </TitlePhotoContainer>
  );
};

export default BannerTitlePhotoWrapper;
