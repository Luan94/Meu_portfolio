import React from 'react';
import translationUtils from '../../../hooks/translationUtils';
import Phrase from '../../data/catchPhrase.json';
import styled, { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

// Estilo global para adicionar o contorno pontilhado


const CatchPhrase = styled.section`
  ${tw`container mx-auto`}
`;

const CatchPhraseContent = styled.p`
  ${tw`text-white mt-6`}
`;

const BannerCatchPhrase = ({ language }) => {
  return (
    <>
      
      <CatchPhrase>
        <CatchPhraseContent>{translationUtils('catch_phrase', language, Phrase)}</CatchPhraseContent>
      </CatchPhrase>
    </>
  );
};

export default BannerCatchPhrase;
