import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './components/Layout/GlobalStyles';
import Menu from './components/Layout/Menu/Menu';
import Footer from './components/Layout/Footer/footer';
import LoadingAnimation from './components/Layout/loading-animation';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

const getLanguageFromStorage = (): string => localStorage.getItem('language') ?? 'portugues';

const Root: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<string>(getLanguageFromStorage());
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const changeLanguage = (lang: string): void => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
        <GlobalStyles />
                      
            <Menu changeLanguage={changeLanguage} />
            <Routes>
              <Route path="/portfolio" element={<HomePage language={language} />} />
              <Route path="/portfolio/projects" element={<ProjectsPage language={language} />} />
            </Routes>
            <Footer language={language} />
          
        </>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Router> <Root /></Router> );
} else {
  console.error("'root' not found.");
}
