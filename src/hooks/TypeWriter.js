import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de piscar
const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Estilizando a barra de digitação
const Cursor = styled.span`
  animation: ${blinkAnimation} 1s step-end infinite;
`;

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      {/* Barra de digitação */}
      <Cursor> |</Cursor>
    </span>
  );
};

export default Typewriter;