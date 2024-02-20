import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  width: 100%;
  height: 2vh;
  margin-top: -2vh; /* Mantém o degradê sobre a imagem */
  position: absolute;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0),#151515);

`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
