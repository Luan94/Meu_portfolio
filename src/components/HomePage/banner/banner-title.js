import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TypewriterHook from '../../../hooks/TypeWriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TextContainer = styled.div`
  ${tw`text-left z-20 text-white`}
`;

const Title = styled.h1`
  ${tw`text-4xl md:text-6xl lg:text-6xl mb-4 text-left font-bold text-white`}
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TypewriterText = styled.span`
  ${tw`text-base md:text-lg lg:text-xl mb-4 overflow-hidden whitespace-nowrap relative font-medium`}
  color: #eee;
`;

const SocialContainer = styled.div`
  ${tw`mt-4`}
`;

const SocialButton = styled.a`
  ${tw`mr-4`}
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const BannerTitle = () => {
  return (
    <TextContainer className='esse'>
      <Title>Luan Vilas Boas</Title>
      <TypewriterText>
        <TypewriterHook text="Jr Fullstack Web Developer" delay={100} />
      </TypewriterText>
      <SocialContainer>
        <SocialButton href="https://github.com/Luan94" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/luanvilasboas-desenvolvedor/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </SocialButton>
      </SocialContainer>
    </TextContainer>
  );
};

export default BannerTitle;
