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
  ${tw`flex flex-wrap items-center py-5 text-white`}
`;

const Column = styled.div`
  ${tw`w-full md:w-1/2 flex justify-center p-12`}
`;

const Text = styled.div`
  ${tw`text-lg text-left`}
  line-height: 1.6;
  max-width: 600px;
`;

const AboutMe = ({ language }) => {
  return (
    <div id="about-me">
      <AboutMeSection>
        <Column>
          <FadeInAnimation>
            <Text>
              <h3>{translationUtils('about_me_title', language, aboutme)}</h3>
              {translationUtils('about_me_content', language, aboutme)}
            </Text>
          </FadeInAnimation>
        </Column>
      </AboutMeSection>
    </div>
  );
};

export default AboutMe;
