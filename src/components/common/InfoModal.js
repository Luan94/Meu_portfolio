import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo cinza escuro */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
${tw`z-50`}
  background-color: #333; /* Cor de fundo cinza escuro */
  color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const InfoModal = ({ isOpen, message, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    isOpen && (
      <ModalBackdrop>
        <ModalContent>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <p>{message}</p>
          <button onClick={handleClose}>Fechar</button>
        </ModalContent>
      </ModalBackdrop>
    )
  );
};

export default InfoModal;
