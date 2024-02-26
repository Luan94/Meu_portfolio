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

const FadeInAnimation = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const AboutMeSection = styled.section`
  ${tw`flex flex-wrap items-center py-5 bg-black text-white`}
`;

const Column = styled.div`
  ${tw`w-full md:w-1/2 flex justify-center p-12`}
`;

const Image = styled.img`
  ${tw`rounded-3xl`}
  object-fit: cover;
  max-width: 100%;
`;

const Text = styled.div`
  ${tw`text-lg text-left`}
  line-height: 1.6;
  max-width: 600px;
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
      <Column ref={leftColumnRef}>
        <FadeInAnimation style={{ opacity: leftColumnInView ? 1 : 0 }}>
          <Text>
            Como um entusiasta da tecnologia desde a infância, sempre mantive uma paixão ardente pela área. Buscar uma carreira na indústria tecnológica, especialmente no desenvolvimento de sistemas, sempre foi meu maior objetivo.
            <br/><br/>
            Atualmente, estou empenhado em aprimorar e aprofundar meus conhecimentos em Laravel e ReactJS. Além disso, estou explorando plataformas low-code para o desenvolvimento de sistemas, buscando ampliar minha expertise. Dedico-me constantemente ao estudo e à prática, com o objetivo de alcançar minhas metas profissionais.
            <br/><br/>
            Encaro a jornada do aprendizado como um desafio estimulante e gratificante. Encontrar soluções inovadoras e aplicar meus conhecimentos para superar obstáculos é o que me motiva diariamente. Estou genuinamente comprometido em exercer minha profissão com paixão e excelência.
          </Text>
        </FadeInAnimation>
      </Column>
      <Column ref={rightColumnRef}>
        <FadeInAnimation style={{ opacity: rightColumnInView ? 1 : 0 }}>
          <Image src={ImageSrc} alt="Your Name" />
        </FadeInAnimation>
      </Column>
    </AboutMeSection>
  );
};

export default AboutMe;
