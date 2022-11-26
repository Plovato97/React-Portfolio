import React from "react";

import runBud from '../../img/run-bud.jpg'
import weatherD from '../../img/weather-d.png'
import notes from '../../img/note-taker.png'
import timeQ from '../../img/time-quiz.png'

export default function portfolio() {

    const projects = [
        {
            projectName: "Run Buddy",
            projectDescription: "HTML/CSS",
            projectImg: runBud,


        },
        {
            projectName: "Time Quiz",
            projectDescription: "HTML/CSS/BootStrap/JavaScript",
            projectImg: timeQ,


        },
        {
            projectName: "Weather Dashboard",
            projectDescription: "HTML/CSS",
            projectImg: weatherD,


        },
        {
            projectName: "Note Taker",
            projectDescription: "Express.js/JSON",
            projectImg: notes,


        }
    ]

    return (
        <>
<div className="card bg-dark text-white">
  <img cassName="card-img" src={ projects[0].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
    <h5 className="card-title">{ projects[0].projectName }</h5>
    <p className="card-text">{ projects[0].projectDescription}</p>
  </div>
</div>
</>
    )
}