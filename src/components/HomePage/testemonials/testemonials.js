import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dados da sua experiência profissional (substitua com os seus próprios dados)
const experienceData = [
  {
    id: 1,
    title: 'Cargo 1',
    company: 'Empresa 1',
    date: 'Janeiro 2019 - Presente',
    description: 'Descrição da experiência na Empresa 1.',
  },
  {
    id: 2,
    title: 'Cargo 2',
    company: 'Empresa 2',
    date: 'Fevereiro 2017 - Dezembro 2018',
    description: 'Descrição da experiência na Empresa 2.',
  },
  {
    id: 3,
    title: 'Cargo 3',
    company: 'Empresa 1',
    date: 'Janeiro 2019 - Presente',
    description: 'Descrição da experiência na Empresa 1.',
  },
  {
    id: 4,
    title: 'Cargo 4',
    company: 'Empresa 2',
    date: 'Fevereiro 2017 - Dezembro 2018',
    description: 'Descrição da experiência na Empresa 2.',
  }
  // Adicione mais experiências conforme necessário
];

const PortfolioWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  margin-bottom: 50px;
`;

const TimelineWrapper = styled.div`
  position: relative;
  width:80%;
  
`;

const TimelineNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza os navs */
  margin: 0 auto;
`;

const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active === 'true' ? '#007bff' : '#ced4da')};
  cursor: pointer;
  z-index: 1; /* Garante que o botão ativo fique acima da linha */
`;

const TimelineLine = styled.div`
  width: calc(100% - 20px);
  height: 2px;
  background-color: #ced4da;
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  margin: 0 auto;
  z-index: 0; /* Define a linha por trás dos botões */
  transform: translateY(-50%);
`;

const Event = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0 0 10px;
`;

const Company = styled.p`
  font-weight: bold;
`;

const Date = styled.p`
  font-style: italic;
`;

const Description = styled.p`
  margin-top: 10px;
`;

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <PortfolioWrapper>
      <CarouselWrapper>
        <Slider ref={sliderRef} {...settings}>
          {experienceData.map((experience) => (
            <Event key={experience.id}>
              <Title>{experience.title}</Title>
              <Company>{experience.company}</Company>
              <Date>{experience.date}</Date>
              <Description>{experience.description}</Description>
            </Event>
          ))}
        </Slider>
      </CarouselWrapper>
      <TimelineWrapper>
        <TimelineNav>
          {experienceData.map((experience, index) => (
            <TimelineDot
              key={experience.id}
              active={index === currentSlide ? 'true' : 'false'}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </TimelineNav>
        <TimelineLine />
      </TimelineWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
