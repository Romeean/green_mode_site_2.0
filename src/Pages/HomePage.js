import React, { useEffect } from 'react';
import '../App.css';
import '../Header.css'

import Header from '../Components/Header';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

import background from '../images/background_photo.png';



export default function HomePage() {

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
        <div className="background_container">
        	<img loading="lazy" className="background_image" src={background} alt="Background" />
        	<div className="background_dimmer">
				</div>
        <h1 className="text_title" >GreenMode</h1>
        <h2 className="text_under_title">Проєкти різної складності</h2>
      </div>
          <Header />    
          <AboutUs />
          <Services />
          <ContactUs />

         
        </div>
        <Footer />

      </div>
  );
}

