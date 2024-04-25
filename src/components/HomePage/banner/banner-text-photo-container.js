import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BannerTitle from './banner-title';
import BannerPhoto from './banner-photo'; 

const Container = styled.div`
  ${tw`container mx-auto flex flex-col md:flex-row justify-between items-center relative`}
`;

const LeftColumn = styled.div`
  ${tw`w-full mb-4 md:mb-0 md:mr-4 z-20`}
  @media (max-width: 767px) {
    order: 2;
    margin-top:3rem;
    text-align-last: center;
  }
`;

const RightColumn = styled.div`
  ${tw`w-full text-center z-20 `}
  @media (max-width: 767px) {
    order: 1;
  }
`;

const TwoColumnComponent = () => {
  return (
    <Container>
      <LeftColumn>
        <BannerTitle/>
      </LeftColumn>
      <RightColumn>
        <BannerPhoto/>
      </RightColumn>
    </Container>
  );
};

export default TwoColumnComponent;
