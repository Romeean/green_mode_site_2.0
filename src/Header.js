import { useState, useEffect} from 'react';
import './Header.css';
import './MediaRequest.css';
import background from './images/background_photo.png';
import logo from './images/logo_rectangle.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({ display: 'none' });
  const [columnStyle, setColumnStyle] = useState({ display: 'none' });

 
  const handleMenu = () => {
    setIsOpen((prev) => !prev); 
  };

  useEffect(() => {
    if (isOpen) {
      setMenuStyle({ display: 'flex' });
      setColumnStyle({ display: 'flex' });
    } else {
      setMenuStyle({ display: 'none' });
      setColumnStyle({ display: 'none' });
    }
  }, [isOpen]);



  return (
    <div className="header_main_page" id='mainPage'> 
      <div className="background_container">
        <img loading="lazy" className="background_image" src={background} alt="Background" />
        <div className="background_dimmer"></div>
        <h1 className="text_title" >GreenMode</h1>
        <h2 className="text_under_title">Проєкти різної складності</h2>
      </div> 
      <div className="header">
        <a href="#mainPage" className="logo_button">
          <div className="logo">  
            <img loading="lazy" src={logo} alt="GreenModeLogo"/>
            <div className="logo_text">
              <p className="logo_title">greenmode</p>
              <p className="logo_subtitle">construction</p>
            </div>
          </div> 
        </a>
        <nav>
          <ul className="navbar_links">
            <li><a href="#mainPage" className="text_nav_unique">Головна</a></li>
            <li><a href="#aboutUsPage" className="text_nav">Про компанію</a></li>
            <li><a href="#servicesPage" className="text_nav">Послуги</a></li>
            <li><a href="#contactUsPage" className="text_nav">Контакти</a></li>
          </ul>
          <li><a href="javascript:void(0);" className="nav_burger" onClick={handleMenu}>
            <div className='menu_control'>
              <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </div>  
          </a></li>
          <div style={columnStyle} className="text_column">
            <ul>
              <li className="text_burger_nav"><a href="#mainPage" >Головна</a></li>
              <li className="text_burger_nav"><a href="#aboutUsPage" >Про компанію</a></li>
              <li className="text_burger_nav"><a href="#servicesPage" >Послуги</a></li>
              <li className="text_burger_nav"><a href="#contactUsPage" >Контакти</a></li>
            </ul>
          </div>
        </nav>  
      </div>
    </div>
  );
}
