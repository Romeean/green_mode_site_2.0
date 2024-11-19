import React from "react";
import '../AboutUs.css';
import AboutUsPhoto from '../images/worker.jpg';
import photobg from '../images/construction.svg'

export default function AboutUs() {
  return (
    <div className="about_us_section" id='aboutUsPage'>
      <div className="text_section">  
        <h1 className="title_of_about_us">О нас</h1>
        <p className="subtitle_of_about_us">
        Монтуємо якісні системи резервного живлення, сонячної енергії, вентиляції та опалення.
        </p>
        <p className="subtitle_of_about_us">
          <span className="bold_subtitle_of_about_us">Наша спеціальність</span> - Джерела відновлюваної енергії. Працюємо по всій Україні, реалізували понад 50 проєктів для приватних і державних установ.
        </p>
      </div>
      <div className="photo_section">
        <img loading="lazy" className="worker_image_of_about_us" src={AboutUsPhoto} alt="Worker" />
        <div>
        <div></div>
      </div>
    </div>
  </div>
  );
}
