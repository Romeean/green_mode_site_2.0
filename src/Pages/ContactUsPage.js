import React from "react";
import Footer from "../Components/Footer"
import Header from "../Components/Header";
import ContactUs from '../Components/ContactUs'
import icons_question from '../images/question_contact_us_page.svg'
import background_photo from '../images/backGroundsvg.svg'

import '../ContactUsPage.css'
import '../ServicesPage.css'


export default function ContactUsPage() {
  return(
    <div className="main_page">
      <Header />
      <img src={background_photo} className="bg_photo_contact_us" loading="lazy"></img>
      
      <div className="container">
        <ContactUs />
        <div>
          <div className='block_of_text_contact_us_page'>
            <h1 className="text_of_services">Поширенні <span className="green_text_of_services">Запитання</span></h1>
          </div>
          <div className="question_container">
            <div className="section_questions_answer">
              <div className="component_questions_answer">
                <div>
                  <img  src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">Як вибрати потужність резервного джерела живлення?</p>
                  <p className="subtitle_questions_answer">Для розрахунку потужності системи резервного живлення потрібно визначити сумарну споживану потужність усіх пристроїв, які будуть під'єднані до системи, і додати запас (зазвичай 20-30%). Це допоможе уникнути перевантаження системи.</p>
                </div>
              </div>
              <div className="component_questions_answer">
                <div>
                  <img src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">Які фактори впливають на ефективність теплового насоса?</p>
                  <p className="subtitle_questions_answer">Ефективність залежить від температури зовнішнього повітря, якості теплоізоляції будівлі та типу обраної системи насоса (повітряний або геотермальний).</p>
                </div>
              </div>
              <div className="component_questions_answer">
                <div>
                  <img src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">Які переваги встановлення сонячної електростанції?</p>
                  <p className="subtitle_questions_answer">Сонячні електростанції знижують витрати на електроенергію, забезпечують екологічність та підвищують енергетичну незалежність домогосподарства.</p>
                </div>
              </div>
              <div className="component_questions_answer">
                <div>
                  <img src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">На що звертати увагу при виборі системи вентиляції?</p>
                  <p className="subtitle_questions_answer">Важливо враховувати обсяг повітря, необхідний для якісного повітрообміну, рівень шуму та енергоефективність обладнання.</p>
                </div>
              </div>
              <div className="component_questions_answer">
                <div>
                  <img src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">Як обрати потужність системи опалення для будинку?</p>
                  <p className="subtitle_questions_answer">Для розрахунку враховують площу приміщення, тепловтрати через стіни, вікна й дах, а також кліматичні умови регіону.</p>
                </div>
              </div>
              <div className="component_questions_answer">
                <div>
                  <img src={icons_question} loading="lazy"/>
                </div>
                <div className="text_block_questions_answer"> 
                  <p className="title_questions_answer">Як правильно розмістити кондиціонер у приміщенні?</p>
                  <p className="subtitle_questions_answer">Розташування має виключати прямі потоки повітря на людей, забезпечувати вільну циркуляцію й доступ до блоку для обслуговування.</p>
                </div>
              </div> 
            </div>
          </div>
          
        
        </div>
       
      </div>  
      <Footer />    
    </div>
    )
}