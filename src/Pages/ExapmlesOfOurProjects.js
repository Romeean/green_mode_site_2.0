import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import photo_of_our_work from "../images/photo_of_our_work.svg"
import photo_of_our_work_2 from "../images/photo_of_our_work_2.svg"
import photo_of_our_work_3 from "../images/photo_of_our_work_3.png"
import "../ExamplesOfOurProjects.css"


export default function ExamplesOfOurProjects(){
  return (
    <div className="main_page">
      <Header />
      <div className="container">
        <div className="question_container">
        <div className="the_best_projects_title_block"><h1 className="the_best_projects_title"><span className="the_best_projects_title_green">\\</span> Найкращі проекти </h1></div>
          <div className="grid_block">
            <div className="component_block">
              <div className="photo_bg">
                <img loading="lazy" className="photo" src={photo_of_our_work} alt="Project example" />
              </div>
              <div className="description">
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Сфера проєкту:</span> Система отопления
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Локація:</span> Ласточкіна 5
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Термін виконання:</span> 10 робочих днів
                </p>
              </div>
            </div>
            <div className="component_block">
              <div className="photo_bg">
                <img loading="lazy" className="photo" src={photo_of_our_work_2} alt="Project example" />
              </div>
              <div className="description">
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Сфера проєкту:</span> Резервне живлення
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Локація:</span> Руставі 5
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Термін виконання:</span> 7 робочих днів
                </p>
              </div>
            </div>
            <div className="component_block">
              <div className="photo_bg">
                <img loading="lazy" className="photo" src={photo_of_our_work_3} alt="Project example" />
              </div>
              <div className="description">
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Сфера проєкту:</span> Системи вентеляції та кондиціонування
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Локация:</span> Котиків 8
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Термін виконання</span> 10 робочих днів
                </p>
              </div>
            </div>
            <div className="component_block">
              <div className="photo_bg">
                <img className="photo" src={photo_of_our_work} alt="Project example" />
              </div>
              <div className="description">
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Сфера проекта:</span> Система отопления
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Локация:</span> Чепаева 5
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Термин исполнения:</span> 10 рабочих дней
                </p>
              </div>
            </div>
            <div className="component_block">
              <div className="photo_bg">
                <img className="photo" src={photo_of_our_work} alt="Project example" />
              </div>
              <div className="description">
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Сфера проекта:</span> Система отопления
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Локация:</span> Чепаева 5
                </p>
                <p className="text_of_description_projects">
                  <span className="text_of_description_projects_bold">Термин исполнения:</span> 10 рабочих дней
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}