import React from 'react';
import translationUtils from '../../../hooks/translationUtils';
import Phrase from '../../data/catchPhrase.json';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const QuoteIconL = styled(FontAwesomeIcon).attrs({ icon: faQuoteLeft })`
  ${tw`text-white`}
  font-size: 2.5rem;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`;

const QuoteIconR = styled(FontAwesomeIcon).attrs({ icon: faQuoteRight })`
  ${tw`text-white`}
  font-size: 2.5rem;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const AuthorName = styled.span`
  ${tw`text-white`}
  font-size: 1.1rem;
`;

const CatchPhrase = styled.section`
${tw`mx-auto text-center p-12 relative max-w-xl`}
`;

const CatchPhraseContent = styled.p`
  ${tw`text-white mt-6 relative`}
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

const BannerCatchPhrase = ({ language }) => {
  return (
    <>
      <CatchPhrase>
        <CatchPhraseContent>
          <QuoteIconL /> 
          {translationUtils('catch_phrase', language, Phrase)}
          <QuoteIconR /> 
        </CatchPhraseContent>
        <AuthorName>Seneca</AuthorName>
      </CatchPhrase>
    </>
  );
};

export default BannerCatchPhrase;
