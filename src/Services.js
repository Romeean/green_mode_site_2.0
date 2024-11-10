import React from "react";
import './Services.css'
import icon_ventilation from './images/main_services_ventilation_icon.svg'
import icon_solarsystem from './images/main_services_solar_system_logo.svg'
import icon_heating from './images/main_services_heating.svg'

export default function Services(){ 
  return(
      <div className="services" id="servicesPage" >
        <div className="text_block">
          <h2 className="title_services" >Мы не просто монтируем системы резервного питания</h2>
          <h2 className="title_services">Мы создаём <span  className="green_title_services">Надежное Будущее</span></h2>
        </div>
        <div className="container_of_priorities" >  
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_heating} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Отопление</h2>
              <p className="text_subtitle_of_priorities">Отопление незаменимый компонент нашей жизни, мы предлагаем решение задачи самыми различными способами.</p>
            </div>
          </div>
          <div className="background_of_priorities" >
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_solarsystem} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Солнечные системы</h2>
              <p className="text_subtitle_of_priorities">Резпитание–ключевой элемент надежности и стабильности в наше сложное время</p>  
            </div>
          </div>
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_ventilation} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Системы вентиляции</h2>
              <p className="text_subtitle_of_priorities">Чистота и циркуляция воздуха способна сделать помещение комфортным.
              Позвольте себе дышать свободно</p>

            </div>
          </div>  
        </div>
      </div>

  )
}