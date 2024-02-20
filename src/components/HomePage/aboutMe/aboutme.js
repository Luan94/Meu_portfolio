import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ImageSrc from '../../../assets/images/AboutMe/AboutMe.png';

const AboutMeSection = styled.section`
  ${tw`flex flex-wrap items-center py-5`}
  background-color: #151515;
`;

const LeftColumn = styled.div`
  ${tw`w-full md:w-1/2 md:pr-8 flex justify-center p-12`}
`;

const RightColumn = styled.div`
  ${tw`w-full md:w-1/2 flex justify-center text-white md:text-center p-6`} /* Adicionando texto centralizado em dispositivos móveis */
`;

const StyledImage = styled.img`
  ${tw`rounded-3xl md:rounded-br-[15%] md:rounded-bl-[7%] md:rounded-t-[17%] md:rounded-br-[30%] w-2/4`}
  object-fit: cover; /* Manter a proporção e cortar a imagem */
  
`;

const Text = styled.p`
  ${tw`text-lg text-white text-left`}
  text-align: center; /* Centralizando o texto em dispositivos móveis */
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <LeftColumn>
        <StyledImage src={ImageSrc} alt="Your Name" />
      </LeftColumn>
      <RightColumn>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum tempor justo et laoreet. Vivamus eleifend bibendum nisl, eu posuere est elementum vitae. Aenean mollis nunc sit amet ex aliquet, ullamcorper iaculis velit dapibus. Cras feugiat ultrices consequat. Praesent quis sem mi. Integer sit amet ante dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit mauris sagittis erat eleifend tincidunt. Cras accumsan ante fringilla dui laoreet condimentum. Ut efficitur lacus eu est lacinia ultrices.

          Etiam nibh est, congue et accumsan eget, placerat sed risus. Curabitur efficitur eleifend massa, ac fermentum tortor volutpat sed. Donec eget consectetur erat. Quisque vitae imperdiet augue. Ut pretium at neque vitae gravida. Nullam tincidunt dignissim sagittis. Praesent eget mattis libero. Aliquam at accumsan enim. Aliquam nec turpis sit amet odio rhoncus vulputate. Nunc a suscipit velit. Etiam non commodo arcu. In laoreet velit in neque tristique vehicula. Maecenas in dui luctus ipsum ullamcorper blandit. Duis volutpat tortor quis eros dictum, eu dictum lectus blandit.
        </Text>
      </RightColumn>
    </AboutMeSection>
  );
};

export default AboutMe;
