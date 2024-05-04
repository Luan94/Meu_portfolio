// Footer.js
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Estilos usando tw e styled-components
const FooterWrapper = styled.footer`
  ${tw`text-white p-4`}
  background-color: rgb(8,8,8);
`;

const FooterInnerWrapper = styled.div`
  ${tw`container mx-auto flex justify-between items-center`}
`;

const FooterTextWrapper = styled.div`
  ${tw`flex items-center`}
`;

const FooterLeftText = styled.div`
  ${tw``}
`;

const FooterSocialMediaWrapper = styled.div`
  ${tw`flex`}
`;

const FooterSocialButton = styled.a`
  ${tw`text-white text-xs p-2`}
`;

const FooterRightText = styled.p`
  ${tw`self-center mr-2`}
`;






const Footer = ({ language }) => {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <FooterTextWrapper>
          <FooterLeftText>Feito com ♥ por Luan Vilas Boas</FooterLeftText>
        </FooterTextWrapper>
        <FooterSocialMediaWrapper>
          <FooterRightText>Siga-me</FooterRightText>
          <FooterSocialButton href="https://www.linkedin.com/in/luanvilasboas-desenvolvedor/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </FooterSocialButton>
          <FooterSocialButton href="https://github.com/Luan94" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </FooterSocialButton>
        </FooterSocialMediaWrapper>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;