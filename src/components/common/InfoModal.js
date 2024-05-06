import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ModalBackdrop = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full flex items-center justify-center`}
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo cinza escuro */
  opacity: ${({ $isopen }) => ($isopen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  ${tw`z-50 bg-gray-900 text-white p-6 rounded-lg max-w-80`}
`;

const CloseButton = styled.span`
  ${tw`absolute top-2 right-2 cursor-pointer text-xl`}
`;

const InfoModal = ({ $isopen, message, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <ModalBackdrop $isopen={$isopen}>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default InfoModal;
