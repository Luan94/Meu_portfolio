import React from 'react';
import Banner from '../../components/Banner/banner';
import AboutMe from '../../components/AboutMe/aboutme';
import Skills from '../../components/Stacks/Stacks';
import BannerDivider from '../../components/Banner/bannerSectionDivider';
import BannerCatchPhrase from '../../components/Banner/banner-catch-phrase';

const getLanguageFromStorage = (): string => localStorage.getItem('language') ?? 'portugues';

interface HomePageProps {
  language: string;
  
}

const HomePage: React.FC<HomePageProps> = (props) => {
  

  return (
    <div>
      <Banner language={props.language} />
      <BannerDivider />
      <BannerCatchPhrase language={props.language} />
      <AboutMe language={props.language} />
      <Skills language={props.language} />
    </div>
  );
};

export default HomePage;
