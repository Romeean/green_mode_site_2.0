import React from "react";
import { Link } from "react-router-dom"
import "../Button.css";


export default function Button() {
  return (
    <div className="button_form_services">
      <Link to="/ExamplesOfOurProjects"><button className="button_form_text">Проєкти</button></Link>
    </div>
  );
}
