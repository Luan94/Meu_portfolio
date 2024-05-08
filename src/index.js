import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/common/GlobalStyles';
import Banner from './components/HomePage/banner/banner';
import AboutMe from './components/HomePage/aboutMe/aboutme';
import Skills from './components/HomePage/skills/skills';
import Divider from './components/common/Divider';
import Menu from './components/common/Menu';
import BannerCatchPhrase from './components/HomePage/banner/banner-catch-phrase';
import Footer from './components/common/footer';
import LoadingAnimation from './components/common/loading-animation'; 

const getLanguageFromStorage = () => {
  const storedLanguage = localStorage.getItem('language');
  return storedLanguage ? storedLanguage : 'portugues';
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState(getLanguageFromStorage());
  const [loadingProgress] = useState(0); 

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); 
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      <GlobalStyles />
      {isLoading ? (
        <LoadingAnimation progress={loadingProgress} /> 
      ) : (
        <>
          <Menu changeLanguage={changeLanguage} />
          <Banner language={language} id="BannerWrapper" />
          <Divider />
          <BannerCatchPhrase language={language} />
          <AboutMe language={language} id="aboutmeWrapper" />
          <Skills language={language} id="StacksWrapper" />
          <Footer language={language} id="FooterWrapper" />
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
