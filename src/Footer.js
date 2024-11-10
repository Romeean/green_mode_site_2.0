import React from "react";
import './Footer.css'

import telegram from './images/icon_of_telegram.svg'
import facebook from './images/icon_of_facebook.svg'
import instagram from './images/icon_of_instagram.svg'




export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer_block">
        <div className="footer_column">
          <span className="text_title_footer">Подробнее о нас</span>
          <a href="#mainPage" className="text_title_link">Главная</a>
          <a href="#aboutUsPage" className="text_title_link">О компании</a>
          <a href="#servicesPage" className="text_title_link">Услуги</a>
          <a href="#contactUsPage" className="text_title_link">Контакты</a>
        </div>
        <div className="footer_column">
          <span className="text_title_footer">Наше местоположение</span>
          <p className="text_title_link">ул. Независимой Украины, 47/7, помещение 9</p>
          <a className="text_title_link" target="_blank" href="https://www.google.com/maps/place/47%2F7,+%D1%83%D0%BB.+%D0%9D%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D0%B9+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%8B,+47,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8499772,35.1239557,19z/data=!3m1!4b1!4m6!3m5!1s0x40dc672f6b07d001:0xcbe8b706659419c!8m2!3d47.8499763!4d35.1251748!16s%2Fg%2F1x5qr9q0?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Найти на карте 🔍</a>
        </div>
        <div className="footer_column">
          <span className="text_title_footer">Социальные сети</span>
          <div className="icons_column">
            <a href="https://t.me/greenmodecompany" target="_blank" >
              <img className="icon_footer" src={telegram} alt="there should be an icon"></img>
            </a>
            <a href="https://www.facebook.com/groups/3378801098999189" target="_blank">
              <img className="icon_footer"src={facebook} alt="there should be an icon"></img>
            </a>
            <a href="https://www.instagram.com/climat.comfort.zp/" target="_blank">
              <img className="icon_footer" src={instagram} alt="there should be an icon"></img>
            </a>
          </div>  
        </div>
      </div>
    </footer>
    )
}