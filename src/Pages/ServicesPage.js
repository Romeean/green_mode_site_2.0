import React from "react";
import '../ServicesPage.css'

import Footer from "../Components/Footer"
import Header from "../Components/Header";
import Services from '../Components/Services'
import Button from "../Components/Button";

import background_image from "../images/background_imagee.jpg"
import icon_ventilation from '../images/main_services_ventilation_icon.svg'
import icon_solarsystem from '../images/main_services_solar_system_logo.svg'
import icon_heating from '../images/main_services_heating.svg'





export default function ServicesPage() {
  return(
    <div className="main_page">
      <div className="container">
        
        <div className="background_containerr"> 
          <div >
            <img loading="lazy" className="background_image" src={background_image} alt="Background" />
            <div className="background_dimmerr"></div>
          </div>



        </div>
        <Header />
        <div className="block_of_text_services_page">
          <h1 className="text_of_services">Ми не просто монтуємо системи резервного живлення,</h1>
          <h2 className="text_of_services">Ми створюємо <span className="green_text_of_services">Надійне Майбутнє</span></h2>
        </div>
        <div>
        <div className="services" id="servicesPage" >
        <div className="container_of_priorities" >  
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_solarsystem} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Сонячні системи та електростанції</h2>
              <p className="text_subtitle_of_priorities">Живлення — ключовий та незамінний елемент надійності та стабільності в наш з Вами складний час.</p>
              {/* <Button /> */}
            </div>
          </div>
          <div className="background_of_priorities" >
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_heating} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Теплові насоси та Опалення</h2>
              <p className="text_subtitle_of_priorities">Опалення — незамінний компонент нашого життя, і ми пропонуємо вирішення цього завдання різними способами.</p> 
              {/* <Button />  */}
            </div>
          </div>
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_ventilation} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Системи вентиляції та Кондиціонування</h2>
              <p className="text_subtitle_of_priorities">Чистота та циркуляція повітря здатні зробити приміщення комфортним.
              Дозвольте собі дихати вільно.</p>
              {/* <Button /> */}
            </div>
          </div>  
        </div>
      </div>        </div>
      </div>

    <Footer />

    </div>
    )
}