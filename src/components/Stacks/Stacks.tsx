import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import InfoModal from '../Modal/StacksModal';
import translationUtils from '../../utils/translationUtils';
import stacksData from '../../data/skills.json';
import myStacksTitle from '../../data/titles_and_others.json';
import { useInView } from 'react-intersection-observer';

const StacksContainer = styled.div`
  ${tw`p-6 rounded-lg shadow-md container mx-auto`}
  max-width: 1000px;
  margin: 0 auto;
`;

const CategoryContainer = styled.div<{ $isvisible: boolean }>`
  ${tw`mb-6`}
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const StacksTitle = styled.h3`
  ${tw`text-white text-center mb-2 mt-2`}
`;

const CategoryTitle = styled.h4<{ $isvisible: boolean; $delay: number }>`
  ${tw`text-white text-center mb-2 mt-2`}
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;
  transition-delay: ${({ $delay }) => $delay}s;
`;

const StackItemsContainer = styled.div`
  ${tw`flex flex-wrap justify-center gap-3`}
`;

const StackItem = styled.div<{ $isvisible: boolean }>`
  ${tw`flex flex-col items-center justify-center text-center text-white bg-zinc-950 rounded-lg p-4 cursor-pointer shadow-md `}
  width: calc(100% / 6 - 2rem); 
  opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
  transition: opacity 0.7s ease;

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
    background-color: rgb(24 24 27);
  }
`;

const StackImg = styled.img`
  ${tw`max-w-8 m-3`}
`;

const StackTitle = styled.p`
  ${tw`text-base`}
`;

interface StackData {
  category: string;
  skill_icon: string;
  skill_name: string;
}

interface StacksSectionProps {
  language: string;
}

const StacksSection: React.FC<StacksSectionProps> = ({ language }) => {
  const [stacks, setStacks] = useState<StackData[]>([]);
  const [selectedStack, setSelectedStack] = useState<StackData | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const stackItemsRef = useRef<HTMLDivElement[]>([]);
  const categoryRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const stacksArray: StackData[] = Object.values(stacksData).flatMap((category: StackData[]) => category);
    setStacks(stacksArray);
  }, []);

  useEffect(() => {
    if (inView) {
      categoryRef.current.forEach((category) => {
        category.style.opacity = '1';
      });

      stackItemsRef.current.forEach((item) => {
        item.style.opacity = '1';
      });
    }
  }, [inView]);

  const groupByCategory = () => {
    return stacks.reduce((acc: Record<string, StackData[]>, stack) => {
      if (!acc[stack.category]) {
        acc[stack.category] = [];
      }
      acc[stack.category].push(stack);
      return acc;
    }, {});
  };

  const handleStackItemClick = (stack: StackData) => {
    setSelectedStack(stack);
  };

  const handleCloseModal = () => {
    setSelectedStack(null);
  };

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
              ref={(el) => (categoryRef.current[categoryIndex] = el as HTMLDivElement)}
              $isvisible={inView}
              style={{ transitionDelay: `${totalItemsBeforeCategory * 0.1}s` }}
            >
              <CategoryTitle
                key={categoryIndex}
                $isvisible={inView}
                $delay={totalItemsBeforeCategory * 0.1}
              >
                {translationUtils('categories_language', language, stacks[0])}
              </CategoryTitle>
              <StackItemsContainer>
                {stacks.map((stack, index) => (
                  <StackItem
                    key={index}
                    ref={(el) => (stackItemsRef.current[totalItemsBeforeCategory + index] = el as HTMLDivElement)}
                    onClick={() => handleStackItemClick(stack)}
                    $isvisible={inView}
                    style={{ transitionDelay: `${totalItemsBeforeCategory * 0.1 + index * 0.1}s` }}
                  >
                    <StackImg loading="lazy" src={stack.skill_icon} alt={stack.skill_name} />
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
};

export default StacksSection;
