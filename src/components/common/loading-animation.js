import React from 'react';
import styled, { keyframes } from 'styled-components';

const bufferAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Buffer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px dotted white;
  border-top-color: transparent;
  animation: ${bufferAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Buffer />
    </LoadingContainer>
  );
};

export default Loading;
