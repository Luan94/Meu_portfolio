import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TypewriterHook from '../../../hooks/TypeWriter';

const TextContainer = styled.div`
  ${tw`absolute text-left z-10 text-white`}
  left: 10%;
`;

const Title = styled.h1`
  ${tw`text-4xl md:text-6xl lg:text-6xl mb-4 text-left font-bold text-white`}
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TypewriterText = styled.span`
  ${tw`text-base md:text-lg lg:text-xl mb-4 overflow-hidden whitespace-nowrap relative font-medium`}
  color: #eee;
`;

const BannerTitle = () => {
  return (
    <TextContainer>
      <Title>Luan Vilas Boas</Title>
      <TypewriterText>
        <TypewriterHook text="Fullstack Web Developer" delay={100} />
      </TypewriterText>
    </TextContainer>
  );
};

export default BannerTitle;
