import './App.css';
import Header from './Header';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';

import React, { useEffect } from 'react';


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
      <div className='main_page'>
        <div className='container'>
          <Header />    
          <AboutUs />
          <Services />
          <ContactUs />

         
        </div>
        <Footer />

      </div>
  );
}

export default App;
