import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import InfoModal from '../../common/InfoModal';
import translationUtils from '../../../hooks/translationUtils';
import stacksData from '../../data/skills.json';
import myStacksTitle from '../../data/titles_and_others.json';
import { useInView } from 'react-intersection-observer';

const StacksContainer = styled.div`
  ${tw`p-6 rounded-lg shadow-md container mx-auto`}
  max-width: 1000px;
  margin: 0 auto;
`;

const CategoryContainer = styled.div`
  ${tw`mb-6`}
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const StacksTitle = styled.h3`
  ${tw`text-white text-center mb-2 mt-2`}
`;

const CategoryTitle = styled.h4`
  ${tw`text-white text-center mb-2 mt-2`}
`;

const StackItemsContainer = styled.div`
  ${tw`flex flex-wrap justify-center gap-3`}
`;

const StackItem = styled.div`
  ${tw`flex flex-col items-center justify-center text-center text-white bg-neutral-950 rounded-lg p-4 cursor-pointer`}
  width: calc(100% / 6 - 2rem); 
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const StackImg = styled.img`
  ${tw`max-w-8 m-3`}
`;

const StackTitle = styled.p`
  ${tw`text-base`}
`;

const StacksSection = ({ language }) => {
  const [stacks, setStacks] = useState([]);
  const [selectedStack, setSelectedStack] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const stackItemsRef = useRef([]);
  const categoryRef = useRef([]);

  useEffect(() => {
    const stacksArray = Object.values(stacksData).flatMap(category => category);
    setStacks(stacksArray);
  }, []);

  const groupByCategory = () => {
    return stacks.reduce((acc, stack) => {
      if (!acc[stack.category]) {
        acc[stack.category] = [];
      }
      acc[stack.category].push(stack);
      return acc;
    }, {});
  };

  const groupedStacks = groupByCategory();

  const handleStackItemClick = (stack) => {
    setSelectedStack(stack);
  };

  const handleCloseModal = () => {
    setSelectedStack(null);
  };

  useEffect(() => {
    if (inView) {
      let delay = 0;
  
      // Itera sobre cada CategoryContainer
      categoryRef.current.forEach((category, categoryIndex) => {
        // Adiciona atraso para o CategoryContainer começar sua animação
        setTimeout(() => {
          category.style.opacity = 1;
  
          // Itera sobre os StackItems do CategoryContainer atual
          stackItemsRef.current
            .slice(categoryIndex * 6, (categoryIndex + 1) * 6)
            .forEach((item, index) => {
              // Adiciona atraso para cada StackItem do CategoryContainer atual
              setTimeout(() => {
                item.style.opacity = 1;
              }, delay + index * 5); // Atraso de 100ms entre cada StackItem
            });
        }, delay);
  
        // Calcula o atraso total para o próximo CategoryContainer
        delay += stacks.length * 100; // Adiciona um atraso extra de 500ms entre os CategoryContainers
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <StacksContainer>
        <StacksTitle>{translationUtils('my_stacks_title', language, myStacksTitle)}</StacksTitle>
        {Object.entries(groupedStacks).map(([category, stacks], categoryIndex) => (
          <CategoryContainer
            key={category}
            ref={el => (categoryRef.current[categoryIndex] = el)}
            isVisible={inView}
          >
            <CategoryTitle>{translationUtils('categories_language', language, stacks[0])}</CategoryTitle>
            <StackItemsContainer>
              {stacks.map((stack, index) => (
                <StackItem
                  key={index}
                  ref={el => (stackItemsRef.current[categoryIndex * 1 + index] = el)}
                  onClick={() => handleStackItemClick(stack)}
                  isVisible={inView}
                  style={{ transitionDelay: `${index * 0.1}s` }} // Atraso entre cada StackItem
                >
                  <StackImg src={stack.skill_icon} alt={stack.skill_name} />
                  <StackTitle>{stack.skill_name}</StackTitle>
                </StackItem>
              ))}
            </StackItemsContainer>
          </CategoryContainer>
        ))}
      </StacksContainer>

      <InfoModal
        isOpen={selectedStack !== null}
        message={translationUtils('skill_description', language, selectedStack)}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default StacksSection;
