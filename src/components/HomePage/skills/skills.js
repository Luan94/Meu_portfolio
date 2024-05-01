import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import InfoModal from '../../common/InfoModal';
import translationUtils from '../../../hooks/translationUtils';
import stacksData from '../../data/skills.json'; // Importando os dados diretamente

const StacksContainer = styled.div`
  ${tw`p-4 rounded-lg shadow-md container mx-auto`}
  max-width: 1000px;
  margin: 0 auto;
`;

const CategoryContainer = styled.div`
  ${tw`mb-6`}
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
  ${tw`flex flex-col items-center justify-center text-center text-white bg-neutral-950 rounded-lg p-4 cursor-pointer transition-colors`}
  width: calc(20% - 2rem);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StackImg = styled.img`
  ${tw`max-w-8 m-3`}
`;



const StacksSection = ({ language }) => {
  const [stacks, setStacks] = useState([]);
  const [selectedStack, setSelectedStack] = useState(null);

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

  return (
    <div>
      
      <StacksContainer>
      <StacksTitle>Minhas Stacks</StacksTitle>
        {Object.entries(groupedStacks).map(([category, stacks]) => (
          <CategoryContainer key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <StackItemsContainer>
              {stacks.map((stack, index) => (
                <StackItem key={index} onClick={() => handleStackItemClick(stack)}>            
                  <StackImg src={stack.skill_icon} alt={stack.skill_name} />
                  <h3>{stack.skill_name}</h3>
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
