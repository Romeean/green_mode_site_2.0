import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../Header.css';
import '../MediaRequest.css';
import logo from '../images/logo_rectangle.svg';

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
            <li><Link to="/"><a className="text_nav_unique">Головна</a></Link></li>
            <li><Link to="/AboutUsPage"><a className="text_nav">Про компанію</a></Link></li>
            <li><Link to="/ServicesPage"><a className="text_nav">Послуги</a></Link></li>
            <li><Link to="/ContactUsPage"><a className="text_nav">Контакти</a></Link></li>
          </ul>
          <li><a href="javascript:void(0);" className="nav_burger" onClick={handleMenu}>
            <div className='menu_control'>
              <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </div>  
          </a></li>
          <div style={columnStyle} className="text_column">
            <ul>
              <li className="text_burger_nav"><Link to="/"><a>Головна</a></Link></li>
              <li className="text_burger_nav"><Link to="/AboutUsPage"><a>О нас</a></Link></li>
              <li className="text_burger_nav"><Link to="/ServicesPage"><a>Послуги</a></Link></li>
              <li className="text_burger_nav"><Link to="/ContactUsPage"><a>Контакти</a></Link></li>
            </ul>
          </div>
        </nav>  
      </div>
    </div>
  );
}
