import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/common/GlobalStyles';
import Banner from './components/HomePage/banner/banner';
import AboutMe from './components/HomePage/aboutMe/aboutme';
import Experience from './components/HomePage/experience/experience';
import RecentStudies from './components/HomePage/recentstudies/recentStudies';
import Skills from './components/HomePage/skills/skills';
import Testemonials from './components/HomePage/testemonials/testemonials';
import Divider from './components/common/Divider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Banner/>
    <Divider/>
    <AboutMe />
    <Experience />
    <RecentStudies />
    <Skills />
    <Testemonials/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
