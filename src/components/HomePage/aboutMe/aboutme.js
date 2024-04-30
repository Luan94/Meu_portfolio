// AboutMe.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import translationUtils from '../../../hooks/translationUtils';
import aboutme from '../../data/aboutme.json';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInAnimation = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const AboutMeSection = styled.section`
  ${tw`text-white container mx-auto`}
`;

const Column = styled.div`
  ${tw`w-full`}
`;

const Text = styled.div`
  ${tw`text-lg text-left`}
  line-height: 1.6;
  max-width: 600px;
`;

const AboutMe = ({ language }) => {
  return (
    
      <AboutMeSection id="about-me">
        <Column>
          <FadeInAnimation>
            <Text>
              <h3>{translationUtils('about_me_title', language, aboutme)}</h3>
              {translationUtils('about_me_content', language, aboutme)}
            </Text>
          </FadeInAnimation>
        </Column>
      </AboutMeSection>
   
  );
};

export default AboutMe;
