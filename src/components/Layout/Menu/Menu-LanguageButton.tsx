import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const LanguageButtonWrapper = styled.div`
  ${tw`flex items-center`}
`;

const Buttons = styled.div`
  ${tw` outline outline-white outline-1 rounded `}
`;

interface LanguageButtonProps {
  $active: boolean;
}

const LanguageButton = styled.div<LanguageButtonProps>`
  ${tw`text-white inline-block p-2 text-xs`}
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ $active }) => ($active ? 'white' : 'transparent')};
  color: ${({ $active }) => ($active ? 'black' : 'white')};

  &:hover {
    color: black;
    background: white;
  }
`;



interface Props {
  language: string;
  handleLanguageChange: (lang: string) => void;
}

const LanguageSwitch: React.FC<Props> = ({ language, handleLanguageChange }) => {
  return (
    <LanguageButtonWrapper>    
      <FontAwesomeIcon icon={faGlobe} style={{ color: 'white', marginRight: '10px', cursor: 'pointer' }} />
      <Buttons>
        <LanguageButton
          onClick={() => handleLanguageChange("portugues")}
          aria-label="Mudar para Português"
          $active={language === "portugues"}
        >
          PT-BR
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange("ingles")}
          aria-label="Mudar para Inglês"
          $active={language === "ingles"}
        >
          ENG
        </LanguageButton>
      </Buttons>
    </LanguageButtonWrapper>
  );
};

export default LanguageSwitch;
