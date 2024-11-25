import React from "react";
import '../App.css'
import '../MediaRequest.css'
import '../AboutUsPage.css'
import Header from '../Components/Header';
import Footer from "../Components/Footer"

import background_owner from "../images/background_photo_owner.svg"
import background_group_photo from "../images/group_photo.svg"


export default function AboutUsPage() {
  return(
  <div className='main_page'>
    <div className='container'>   
      <div> 
        <div className="background_container">
          <img loading="lazy" className="background_image" src={background_owner} alt="Background" />
          <div className="background_dimmer">
        </div>
        <div className='block_of_text_aboutuss_page'>
          <h1 className="text_title_aboutus_page">Ми усвідомлюємо весь ступінь відповідальності, покладеної на нас у створенні надійного енергетичного майбутнього.</h1>
          <h2 className="text_under_title_aboutus_page">Ігор Гавриленко Засновник "GreenModeCompany"
          </h2>
        </div>
        </div>
        <div>
        </div>
        <Header />

      </div>
      <div>
        <div className='text_block_aboutus_page'>
          <h1 className='main_text_aboutus_page'>Про <p className='main_text_greened_aboutus_page'>компанію</p></h1>
          <p className='subtitle_text_aboutus_page'>Наша історія почалася 2014 року, коли ми з ентузіазмом взялися за навчання встановленню та обслуговуванню систем кондиціонування. Тоді, ще не маючи за плечима досвіду, ми прагнули не просто освоїти ремесло, а закласти фундамент для майбутньої компанії, здатної розробляти інженерні рішення, орієнтовані на високу якість і комфорт для наших клієнтів. Це стало першим кроком на шляху до створення команди професіоналів, готових вирішувати будь-які завдання в галузі кліматичного обладнання.</p>
          <p className='subtitle_text_aboutus_page'>До 2019 року, накопичивши значний досвід, ми ухвалили рішення розширити сферу діяльності та освоїли установку й обслуговування систем опалення. Це відкрило перед нами нові можливості - тепер ми могли пропонувати комплексні рішення, які включали як охолодження, так і обігрів. Тепер нашими послугами користувалися не тільки власники приватних будинків, а й компанії, які потребували систем, що забезпечують комфортні умови в будь-яку пору року.</p>
          <p className='subtitle_text_aboutus_page'>До 2023 року ми зробили ще один важливий крок - почали працювати з сонячними системами та резервним енергопостачанням. Це дало нам змогу запропонувати клієнтам рішення, спрямовані не тільки на комфорт, а й на підвищення енергоефективності та незалежності від зовнішніх джерел енергії. У світі, де надійне енергопостачання стає дедалі актуальнішим, ми зуміли стати надійними партнерами для наших клієнтів, допомагаючи їм зробити важливий крок у майбутнє, орієнтоване на екологічність і стабільність.</p>
          <p className='subtitle_text_aboutus_page'>Сьогодні ми з гордістю відзначаємо, що наш шлях, який розпочався з невеликих проєктів, привів нас до можливості пропонувати комплексні інженерні рішення в галузі вентиляції, опалення, кондиціювання та резервного живлення. Ми цінуємо довіру наших клієнтів і прагнемо виправдовувати її, пропонуючи якісні та сучасні рішення для кожного.</p>
        </div>
      </div>
      <div class="meet_our_team">
        <div class="fr_text">
          <h2 class="text_meet_our_team">
            Познайомтесь з нашими <span class="text_meet_our_team_green">працівниками</span>
          <div className="container_of_our_team">
            <img className="image_of_us"src={background_group_photo}></img>
          </div>
          </h2>
          
        </div>

      </div>
    </div>
    <Footer />
  </div>
    )
}