import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const StacksTitle = styled.h3`
  ${tw`text-white text-center mb-2 mt-2`}
`;

const CategoryTitle = styled.h4`
  ${tw`text-white text-center mb-2 mt-2`}
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
  transition-delay: ${({ $delay }) => `${$delay}s`};
`;

const StackItemsContainer = styled.div`
  ${tw`flex flex-wrap justify-center gap-3`}
`;

const StackItem = styled.div`
 ${tw`flex flex-col items-center justify-center text-center text-white bg-neutral-950 rounded-lg p-4 cursor-pointer`}
  width: calc(100% / 6 - 2rem); 
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
  transition-delay: ${({ $delay }) => `${$delay}s`};

  @media (max-width: 1440px) {
    width: calc(100% / 5 - 2rem); 
  }

  @media (max-width: 1080px) {
    width: calc(100% / 5 - 2rem); 
  }

  @media (max-width: 768px) {
    width: calc(100% / 2 - 2rem); 
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StackImg = styled.img`
  ${tw`max-w-8 m-3`}
`;

const StackTitle = styled.p`
  ${tw`text-base`}
`;

const StacksSection = React.memo(({ language }) => {
  const [stacks, setStacks] = useState([]);
  const [selectedStack, setSelectedStack] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  useEffect(() => {
    const stacksArray = Object.values(stacksData).flatMap(category => category);
    setStacks(stacksArray);
  }, []);

  useEffect(() => {
    if (inView && !categoriesVisible) {
      setCategoriesVisible(true);
    }
  }, [inView, categoriesVisible]);

  const groupByCategory = useCallback(() => {
    return stacks.reduce((acc, stack) => {
      if (!acc[stack.category]) {
        acc[stack.category] = [];
      }
      acc[stack.category].push(stack);
      return acc;
    }, {});
  }, [stacks]);

  const handleStackItemClick = useCallback((stack) => {
    setSelectedStack(stack);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedStack(null);
  }, []);

  return (
    <div ref={ref}>
      <StacksContainer>
        <StacksTitle>{translationUtils('my_stacks_title', language, myStacksTitle)}</StacksTitle>
        {Object.entries(groupByCategory()).map(([category, stacks], categoryIndex) => {
          const totalItemsBeforeCategory = Object.keys(groupByCategory())
            .slice(0, categoryIndex)
            .reduce((acc, currCategory) => acc + groupByCategory()[currCategory].length, 0);
          return (
            <CategoryContainer
              key={category}
              $isvisible={categoriesVisible}
            >
              <CategoryTitle
                $isvisible={categoriesVisible}
                $delay={totalItemsBeforeCategory * 0.1}>
                {translationUtils('categories_language', language, stacks[0])}
              </CategoryTitle>
              <StackItemsContainer>
                {stacks.map((stack, index) => (
                  <StackItem
                    key={index}
                    onClick={() => handleStackItemClick(stack)}
                    $isvisible={categoriesVisible}
                    $delay={totalItemsBeforeCategory * 0.1 + index * 0.1}
                  >
                    <StackImg src={stack.skill_icon} alt={stack.skill_name} />
                    <StackTitle>{stack.skill_name}</StackTitle>
                  </StackItem>
                ))}
              </StackItemsContainer>
            </CategoryContainer>
          );
        })}
      </StacksContainer>

      <InfoModal
        isOpen={selectedStack !== null}
        message={translationUtils('skill_description', language, selectedStack)}
        onClose={handleCloseModal}
      />
    </div>
  );
});

export default StacksSection;
