import { Route, Routes, Router, HashRouter, Link, BrowserRouter } from 'react-router-dom';
import  React, { useEffect } from 'react';

import HomePage from '../src/Pages/HomePage';
import AboutUsPage from '../src/Pages/AboutUsPage';
import ServicesPage from '../src/Pages/ServicesPage';
import ContactUsPage from '../src/Pages/ContactUsPage';
import ExamplesOfOurProjects from '../src/Pages/ExapmlesOfOurProjects'
import ScrollToTop from './Components/ScrollUp';


function App() {

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/AboutUsPage" element={<AboutUsPage />}/>
        <Route path="/ServicesPage" element={<ServicesPage />}/>
        <Route path="/ContactUsPage" element={<ContactUsPage />}/>
        <Route path="/ExamplesOfOurProjects" element={<ExamplesOfOurProjects />}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
