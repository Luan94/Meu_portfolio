import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definição da animação do buffer
const bufferAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

// Estilização do contêiner de carregamento
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Estilização do buffer de carregamento
const Buffer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px dotted white;
  border-top-color: transparent;
  animation: ${bufferAnimation} 1s linear infinite;
`;

// Componente de carregamento
const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Buffer />
    </LoadingContainer>
  );
};

export default Loading;
