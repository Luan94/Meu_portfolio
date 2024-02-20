import React, { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
  const textos = [
    "Este é o primeiro texto.",
    "Aqui está o segundo texto.",
    "E finalmente, o terceiro texto."
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(900); // Velocidade de digitação em ms por caractere
  const [deletingSpeed, setDeletingSpeed] = useState(900); // Velocidade de exclusão em ms por caractere
  const requestRef = useRef();

  useEffect(() => {
    const typeWriter = (timestamp) => {
      const textoAtual = textos[index];
      let newText = displayText;

      if (isDeleting) {
        if (displayText.length > 0) {
          newText = newText.slice(0, -1);
          requestRef.current = requestAnimationFrame(typeWriter);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textos.length);
          setTimeout(() => {
            requestRef.current = requestAnimationFrame(typeWriter);
          }, 1000); // Tempo de espera após a exclusão antes de iniciar a próxima digitação
        }
      } else {
        if (displayText.length < textoAtual.length) {
          newText = textoAtual.substring(0, displayText.length + 1);
          requestRef.current = requestAnimationFrame(typeWriter);
        } else {
          setIsDeleting(true);
          setTimeout(() => {
            requestRef.current = requestAnimationFrame(typeWriter);
          }, 1000); // Tempo de espera após a digitação antes de iniciar a exclusão
        }
      }

      setDisplayText(newText);
    };

    // Iniciando a animação
    requestRef.current = requestAnimationFrame(typeWriter);

    return () => cancelAnimationFrame(requestRef.current);
  }, [index, displayText, isDeleting, textos]);

  return (
    <div className="about-me">
      <h2>Skills</h2>
      
    </div>
  );
};

export default AboutMe;
