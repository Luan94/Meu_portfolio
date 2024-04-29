import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/common/GlobalStyles';
import Banner from './components/HomePage/banner/banner';
import AboutMe from './components/HomePage/aboutMe/aboutme';
import RecentStudies from './components/HomePage/recentstudies/recentStudies';
import Skills from './components/HomePage/skills/skills';
import Testemonials from './components/HomePage/testemonials/testemonials';
import Divider from './components/common/Divider';
import Menu from './components/common/Menu';

const App = () => {
  
  const getLanguageFromStorage = () => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'portugues';
  };

  const [language, setLanguage] = useState(getLanguageFromStorage()); 

  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      <GlobalStyles/>
      <Menu changeLanguage={changeLanguage} />
      <Banner language={language} />
      <Divider/>
      <AboutMe language={language} />
      <Skills />
      <RecentStudies />  
      <Testemonials/>
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
