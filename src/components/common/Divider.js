import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  width: 100%;
  height: 8vh;
  margin-top: -8vh;
  position: absolute;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0),#000000);

`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
