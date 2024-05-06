import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/common/GlobalStyles';
import Banner from './components/HomePage/banner/banner';
import AboutMe from './components/HomePage/aboutMe/aboutme';
import Skills from './components/HomePage/skills/skills';
import Divider from './components/common/Divider';
import Menu from './components/common/Menu';
import BannerCatchPhrase from './components/HomePage/banner/banner-catch-phrase';
import Footer from './components/common/footer';

const App = () => {
  const getLanguageFromStorage = () => localStorage.getItem('language') || 'portugues';

  const [language, setLanguage] = useState(getLanguageFromStorage()); 

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <React.StrictMode>
      <div>
        <GlobalStyles/>
        <Menu changeLanguage={changeLanguage} />
        <Banner language={language} />
        <Divider/>
        <BannerCatchPhrase language={language}/>
        <AboutMe language={language} />
        <Skills language={language} />
        <Footer language={language}></Footer>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


