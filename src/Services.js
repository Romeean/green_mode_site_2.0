import React from "react";
import './Services.css'
import icon_ventilation from './images/main_services_ventilation_icon.svg'
import icon_solarsystem from './images/main_services_solar_system_logo.svg'
import icon_heating from './images/main_services_heating.svg'

export default function Services(){ 
  return(
      <div className="services" id="servicesPage" >
        <div className="text_block">
          <h2 className="title_services" >Ми не просто монтуємо системи резервного живлення</h2>
          <h2 className="title_services">Ми створюємо <span  className="green_title_services">Надійне Майбутнє</span></h2>
        </div>
        <div className="container_of_priorities" >  
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_heating} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Опаленя</h2>
              <p className="text_subtitle_of_priorities">Опалення — незамінний компонент нашого життя, і ми пропонуємо вирішення цього завдання різними способами.</p>
            </div>
          </div>
          <div className="background_of_priorities" >
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_solarsystem} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Сонячні системи</h2>
              <p className="text_subtitle_of_priorities">Живлення — ключовий елемент надійності та стабільності в наш складний час.</p>  
            </div>
          </div>
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img loading="lazy" className="icon_image" src={icon_ventilation} alt='notfound'></img>
              <h2 className="text_title_of_priorities">Системи вентиляції</h2>
              <p className="text_subtitle_of_priorities">Чистота та циркуляція повітря здатні зробити приміщення комфортним.
              Дозвольте собі дихати вільно.</p>

            </div>
          </div>  
        </div>
      </div>

  )
}