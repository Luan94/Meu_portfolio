import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StackItemContainer = styled.div`
 ${tw`flex flex-col items-center justify-center text-center text-white bg-neutral-950 rounded-lg p-4 cursor-pointer`}
  width: calc(100% / 6 - 2rem); 
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StackImg = styled.img`
  ${tw`max-w-8 m-3`}
`;

const StackTitle = styled.p`
  ${tw`text-base`}
`;

const StackItem = ({ stack, isVisible, onClick }) => {
  return (
    <StackItemContainer
      onClick={onClick}
      isVisible={isVisible}
    >
      <StackImg src={stack.skill_icon} alt={stack.skill_name} />
      <StackTitle>{stack.skill_name}</StackTitle>
    </StackItemContainer>
  );
};

export default StackItem;
