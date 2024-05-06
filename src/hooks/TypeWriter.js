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

const Typewriter = ({ text, delay, cursorStyle }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        // Se o texto já foi completamente digitado, não faz nada
        return;
      }

      setCurrentText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearInterval(typingInterval);
  }, [text, delay, currentIndex]);

  return (
    <span>
      {currentText}
      {/* Barra de digitação */}
      <Cursor style={cursorStyle}> |</Cursor>
    </span>
  );
};

export default Typewriter;
