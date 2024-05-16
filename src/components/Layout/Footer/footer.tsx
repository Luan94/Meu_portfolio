import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FooterTxt from '../../../data/titles_and_others.json';
import translationUtils from '../../../utils/translationUtils';


const FooterWrapper = styled.footer`
  ${tw`text-white p-4 bg-zinc-950 shadow-md`}
  
`;

const FooterInnerWrapper = styled.div`
  ${tw`container mx-auto md:flex sm:block justify-between items-center`}
`;

const FooterTextWrapper = styled.div`
  ${tw`flex items-center place-content-center`}
`;

const FooterLeftText = styled.div`
  ${tw``}
`;

const FooterSocialMediaWrapper = styled.div`
  ${tw`flex sm:mt-2 place-content-center`}
`;

const FooterSocialButton = styled.a`
  ${tw`text-white text-xs p-2`}
`;

const FooterRightText = styled.p`
  ${tw`self-center mr-2`}
`;

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <FooterWrapper id="footer">
      <FooterInnerWrapper>
        <FooterTextWrapper>
          <FooterLeftText>{translationUtils('footer_made_with_heart', language, FooterTxt)}</FooterLeftText>
        </FooterTextWrapper>
        <FooterSocialMediaWrapper>
          <FooterRightText>{translationUtils('footer_follow_me', language, FooterTxt)}</FooterRightText>
          <FooterSocialButton href="https://www.linkedin.com/in/luanvilasboas-desenvolvedor/" target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </FooterSocialButton>
          <FooterSocialButton href="https://github.com/Luan94" target="_blank" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </FooterSocialButton>
        </FooterSocialMediaWrapper>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;
