import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';


const progressAnimation = keyframes`
  0% { width: 0%; }
  50% { width: 100%; }
  100% { width: 100%; }
`;

const LoadingContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const ProgressBarContainer = styled.div`
  ${tw`relative w-full max-w-lg p-1 rounded`}
  outline: 2px solid white; 
  outline-offset: 7px;
`;

const ProgressBar = styled.div`
  ${tw`w-full h-4 bg-gray-200 rounded`}
  position: relative;
`;

const ProgressFill = styled.div`
  ${tw`h-full  relative text-center`}
  width: 100%;
  background: ${({ isLoading }) => isLoading ? 'linear-gradient(to right, #fff 50%, #000 50%)' : '#fff'};
  background-size: 200% 100%;
  background-position: ${({ progress }) => (progress >= 100 ? '0 0' : '100% 0')};
  animation: ${({ isLoading }) => isLoading ? `${progressAnimation} 2s linear` : 'none'};
`;

const ProgressText = styled.div`
  ${tw`absolute font-bold`}
  color: ${({ progress }) => (progress >= 55 ? 'black' : 'white')}; 
  z-index: 2; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 20); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <LoadingContainer>
      <ProgressBarContainer>
        <ProgressBar>
          <ProgressFill progress={progress}>
            <ProgressText progress={progress}> {progress}%...</ProgressText>
          </ProgressFill>
        </ProgressBar>
      </ProgressBarContainer>
    </LoadingContainer>
  );
};

export default LoadingAnimation;
