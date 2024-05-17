import React from 'react';
import translationUtils from '../../utils/translationUtils';
import Phrase from '../../data/catchPhrase.json';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// Definindo as propriedades do componente BannerCatchPhrase
interface BannerCatchPhraseProps {
  language: string;
}

// Ícone de aspas à esquerda
const QuoteIconL = styled(FontAwesomeIcon).attrs({ icon: faQuoteLeft })<{ icon: any }>`
  ${tw`text-white`}
  font-size: 2.5rem;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`;

// Ícone de aspas à direita
const QuoteIconR = styled(FontAwesomeIcon).attrs({ icon: faQuoteRight })<{ icon: any }>`
  ${tw`text-white`}
  font-size: 2.5rem;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  right: 0;
`;

// Nome do autor
const AuthorName = styled.span`
  ${tw`text-white`}
  font-size: 1.1rem;
`;

// Componente de frase de efeito
const CatchPhrase = styled.section`
  ${tw`mx-auto text-center p-12 relative max-w-xl`}
`;

// Conteúdo da frase de efeito
const CatchPhraseContent = styled.p`
  ${tw`text-white mt-6 relative`}
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

// Componente BannerCatchPhrase
const BannerCatchPhrase: React.FC<BannerCatchPhraseProps> = ({ language }) => {
  return (
    <div>
      <CatchPhrase>
        <CatchPhraseContent>
          <QuoteIconL icon={faQuoteLeft} /> 
          {translationUtils('catch_phrase', language, Phrase)}
          <QuoteIconR icon={faQuoteRight} /> 
        </CatchPhraseContent>
        <AuthorName>Seneca</AuthorName>
      </CatchPhrase>
    </div>
  );
};

export default BannerCatchPhrase;
