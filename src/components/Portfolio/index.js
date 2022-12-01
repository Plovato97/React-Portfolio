import React from "react";

import runBud from '../../img/run-bud.jpg'
import weatherD from '../../img/weather-d.png'
import notes from '../../img/note-taker.png'
import timeQ from '../../img/time-quiz.png'
import work from '../../img/wrk-day.png'

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


        },
        {
            projectName: "Note Taker",
            projectDescription: "Express.js/JSON",
            projectImg: work,


        }
    ]

    return (
        <div className="d-flex flex-row ">
<div className="col-lg-4 justify-content-center card bg-dark text-white">
  <img className="card-img" src={ projects[0].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
    <h5 className="card-title">{ projects[0].projectName }</h5>
    <p className="card-text">{ projects[0].projectDescription}</p>
  </div>
</div>
<div className="col-lg-4 card bg-dark text-white">
  <img className="card-img" src={ projects[1].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
    <h5 className="card-title">{ projects[1].projectName }</h5>
    <p className="card-text">{ projects[1].projectDescription}</p>
  </div>
</div>
 <div className="col-lg-4 card bg-dark text-white">
   <img className="card-img" src={ projects[2].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
     <h5 className="card-title">{ projects[2].projectName }</h5>
    <p className="card-text">{ projects[2].projectDescription}</p>
  </div>
</div>

<div className="col-lg-4 card bg-dark text-white">
  <img className="card-img" src={ projects[3].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
     <h5 className="card-title">{ projects[3].projectName }</h5>
     <p className="card-text">{ projects[3].projectDescription}</p>
  </div>
 </div>
<div className="col-lg-4 card bg-dark text-white">
   <img className="card-img" src={ projects[4].projectImg } alt="Card image"></img>
   <div className="card-img-overlay">
    <h5 className="card-title">{ projects[4].projectName }</h5>
    <p className="card-text">{ projects[4].projectDescription}</p>
  </div>
 </div>
 </div>
    )
}