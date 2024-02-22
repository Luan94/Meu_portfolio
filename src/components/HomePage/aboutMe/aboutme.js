import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import ImageSrc from '../../../assets/images/AboutMe/AboutMe.png';
import { useInView } from 'react-intersection-observer';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutMeSection = styled.section`
  ${tw`flex flex-wrap items-center py-5`}
  background-color: #010101;
`;

const LeftColumn = styled.div`
  ${tw`w-full md:w-1/2 md:pr-8 flex justify-center p-12`}
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1s ease-in-out;
`;

const RightColumn = styled.div`
  ${tw`w-full md:w-1/2 flex justify-start text-white md:text-center p-6`}
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1s ease-in-out;
`;

const StyledImage = styled.img`
  ${tw`rounded-3xl md:rounded-br-[10%] md:rounded-bl-[10%] md:rounded-t-[10%] md:rounded-br-[30%]`}
  object-fit: cover;
  max-width: 100%;
`;

const Text = styled.div`
  ${tw`text-lg text-white text-left`}
  text-align: left;
  line-height: 1.6;
  max-width: 600px;
  margin-left: 0; 
`;

const AboutMe = () => {
  const [leftColumnRef, leftColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [rightColumnRef, rightColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <AboutMeSection>
      <LeftColumn ref={leftColumnRef} isVisible={leftColumnInView}>
      <Text>
          Como um entusiasta da tecnologia desde a infância, sempre mantive uma paixão ardente pela área. Buscar uma carreira na indústria tecnológica, especialmente no desenvolvimento de sistemas, sempre foi meu maior objetivo.
          <br/><br/>
          Atualmente, estou empenhado em aprimorar e aprofundar meus conhecimentos em Laravel e ReactJS. Além disso, estou explorando plataformas low-code para o desenvolvimento de sistemas, buscando ampliar minha expertise. Dedico-me constantemente ao estudo e à prática, com o objetivo de alcançar minhas metas profissionais.
          <br/><br/>
          Encaro a jornada do aprendizado como um desafio estimulante e gratificante. Encontrar soluções inovadoras e aplicar meus conhecimentos para superar obstáculos é o que me motiva diariamente. Estou genuinamente comprometido em exercer minha profissão com paixão e excelência.
        </Text>
        
      </LeftColumn>
      <RightColumn ref={rightColumnRef} isVisible={rightColumnInView}>
      <StyledImage src={ImageSrc} alt="Your Name" />
      </RightColumn>
    </AboutMeSection>
  );
};

export default AboutMe;
