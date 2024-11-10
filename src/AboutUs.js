import React from "react";
import './AboutUs.css';
import AboutUsPhoto from './images/worker.jpg';
import photobg from './images/construction.svg'

export default function AboutUs() {
  return (
    <div className="about_us_section" id='aboutUsPage'>
      <div className="text_section">  
        <h1 className="title_of_about_us">О компании</h1>
        <p className="subtitle_of_about_us">
          Монтируем качественные системы резервного питания, солнечной энергии,
          вентиляции и отопления.
        </p>
        <p className="subtitle_of_about_us">
          <span className="bold_subtitle_of_about_us">Наша специальность</span> - источники
          возобновляемой энергии. Работаем по всей Украине, реализовали более 50
          проектов, частных и государственных учереждений.
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
