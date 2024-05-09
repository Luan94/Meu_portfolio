// App.tsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/Common/GlobalStyles';
import Banner from './components/Banner/banner';
import AboutMe from './components/AboutMe/aboutme';
import Skills from './components/Stacks/skills';
import BannerDivider from './components/Banner/bannerSectionDivider';
import Menu from './components/Menu/Menu';
import BannerCatchPhrase from './components/Banner/banner-catch-phrase';
import Footer from './components/Footer/footer';
import LoadingAnimation from './components/Common/loading-animation';

const getLanguageFromStorage = (): string => localStorage.getItem('language') ?? 'portugues';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<string>(getLanguageFromStorage());

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const changeLanguage = (lang: string): void => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      <GlobalStyles />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Menu changeLanguage={changeLanguage} />
          <Banner language={language}/>
          <BannerDivider />
          <BannerCatchPhrase language={language} />
          <AboutMe language={language}/>
          <Skills language={language}/>
          <Footer language={language}/>
        </>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
