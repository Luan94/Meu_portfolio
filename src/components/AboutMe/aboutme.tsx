import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import translationUtils from '../../utils/translationUtils';
import aboutme from '../../data/aboutme.json';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

interface AboutMeProps {
  language: string;
}

const projectImage1 = require('../../assets/images/banner/bg-coding-3.webp') as string;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`;

const FadeInAnimation = styled.div<{ $fadein: boolean }>`
  opacity: ${({ $fadein }) => ($fadein ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const AboutMeSection = styled.section`
  ${tw`text-white container mx-auto p-6 flex flex-col lg:flex-row lg:items-center mt-8 mb-4`}
`;

const Column = styled.div`
  ${tw`w-full lg:w-3/5`}
`;

const Text = styled.div`
  ${tw`text-lg text-left leading-relaxed`}
  max-width: 600px;
`;

const ProjectBox = styled.div<{ $fadein: boolean }>`
  ${tw`w-full lg:w-2/5 bg-gray-800 rounded-lg shadow-sm lg:ml-6 mt-6 lg:mt-0 bg-zinc-950 shadow-md`}
  opacity: ${({ $fadein }) => ($fadein ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ProjectTitle = styled.h4`
  ${tw`text-lg font-bold mb-4 text-center`}
`;

const ProjectDescription = styled.p`
  ${tw`text-sm leading-relaxed`}
`;

const Button = styled.div`
  ${tw`inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-center font-semibold hover:bg-blue-600 transition-colors outline outline-white outline-1 no-underline bg-transparent`}
  transition: 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ProjectImageWrapper = styled.div`
  ${tw`rounded-t-lg`}
  background-image: url(${projectImage1});
  width: 100%;
  height: 25vh; /* Altura responsiva */
  background-size: cover;
  background-position: center;
`;

const ProjectContentWrapper = styled.div`
  ${tw`p-6 rounded-b-lg`}
`;

const ProjectButtonWrapper = styled.div`
  ${tw`text-center`}
`;

const ChevronRightIcon = styled(FontAwesomeIcon)`
  ${tw`ml-2 !bg-transparent`}
  transition: 0.2s ease;
  animation: ${moveRight} 1s ease-in-out infinite;
`;

const AboutMe: React.FC<AboutMeProps> = ({ language }) => {

 
  const [fadeInText, setFadeInText] = useState<boolean>(false);
  const [fadeInProjectBox, setFadeInProjectBox] = useState<boolean>(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0
  });

  useEffect(() => {
    if (inView) {
      setFadeInText(true);
      setFadeInProjectBox(true);
    }
  }, [inView]);

  return (
    <AboutMeSection id="about-me" ref={ref}>
      <Column>
        <FadeInAnimation $fadein={fadeInText}>
          <Text>
            <h4>{translationUtils('about_me_title', language, aboutme)}</h4>
            {translationUtils('about_me_content', language, aboutme)}
          </Text>
        </FadeInAnimation>
      </Column>
      <ProjectBox $fadein={fadeInProjectBox}>
        <ProjectImageWrapper></ProjectImageWrapper>
        <ProjectContentWrapper>
          <ProjectTitle>{translationUtils('about_me_projects_title', language, aboutme)}</ProjectTitle>
          <ProjectDescription>
            {translationUtils('about_me_projects_content', language, aboutme)}
          </ProjectDescription>
          <ProjectButtonWrapper>
            <Link to="/portfolio/projects"><Button>{translationUtils('about_me_projects_button', language, aboutme)} <ChevronRightIcon icon={faChevronRight} /></Button></Link>
          </ProjectButtonWrapper>
        </ProjectContentWrapper>
      </ProjectBox>
    </AboutMeSection>
  );
};

export default AboutMe;
