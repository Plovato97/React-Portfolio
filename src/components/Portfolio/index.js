import React from "react";
import { a } from "react-router-dom";

import runBud from '../../img/runy-buddy.png'
import shopIn from '../../img/shop.png'
import notes from '../../img/note-taker.png'
import timeQ from '../../img/time-quiz.png'
import work from '../../img/wrk-day.png'
import mgc from '../../img/magic-trav.png'

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
            projectName: "Shop-n-It",
            projectDescription: "React/ MERN",
            projectImg: shopIn,


        },
        {
            projectName: "Note Taker",
            projectDescription: "Express.js/JSON",
            projectImg: notes,


        },
        {
            projectName: "Work Day Scheduler",
            projectDescription: "Express.js/JSON",
            projectImg: work,
        },

        {
          projectName: "Magic Traveler",
          projectDescription: "Express.js/JSON",
          projectImg: mgc,
        }
    ]

    return (
      <>
     <div className="d-flex flex-row ">
<div className="col-lg-4 card bg-dark text-white">
<h5 className="card-title">{ projects[0].projectName }</h5>
    <p className="card-text">{ projects[0].projectDescription}</p>
  <img className="card-img" src={ projects[0].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
    <a href="https://github.com/Plovato97/Run-Buddy" target="_blank">
    <button>GitHub</button>
  </a>
  <a href="http://plovato97.github.io/run-buddy" target="_blank">
    <button>Website</button>
  </a>
  </div>
</div>
<div className="col-lg-4 card bg-dark text-white">
<h5 className="card-title">{ projects[1].projectName }</h5>
    <p className="card-text">{ projects[1].projectDescription}</p>
  <img className="card-img" src={ projects[1].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
  <a href="https://github.com/Plovato97/Time-Quiz" target="_blank">
    <button>GitHub</button>
  </a>
  <a href="https://plovato97.github.io/Time-Quiz/" target="_blank">
    <button>Website</button>
  </a>
  </div>
</div>
 <div className="col-lg-4 card bg-dark text-white">
 <h5 className="card-title">{ projects[2].projectName }</h5>
    <p className="card-text">{ projects[2].projectDescription}</p>
   <img className="card-img" src={ projects[2].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
    <a href="https://github.com/Plovato97/weather-dash" target="_blank">
    <button>GitHub</button>
  </a>
  <a href="https://plovato97.github.io/weather-dash/" target="_blank">
    <button>Website</button>
  </a>
  </div>
</div>

<div className="col-lg-4 card bg-dark text-white">
<h5 className="card-title">{ projects[3].projectName }</h5>
     <p className="card-text">{ projects[3].projectDescription}</p>
  <img className="card-img" src={ projects[3].projectImg } alt="Card image"></img>
  <div className="card-img-overlay">
     <a href="https://github.com/Plovato97/Notes-Taker" target="_blank">
    <button>GitHub</button>
  </a>
  <a href="https://note-taking-pl.herokuapp.com/" target="_blank">
    <button>Website</button>
  </a>
  </div>
 </div>
<div className="col-lg-4 card bg-dark text-white">
<h5 className="card-title">{ projects[4].projectName }</h5>
    <p className="card-text">{ projects[4].projectDescription}</p>
   <img className="card-img" src={ projects[4].projectImg } alt="Card image"></img>
   <div className="card-img-overlay">
    <a href="https://github.com/Plovato97/Day-Scheduler" target="_blank">
    <button>GitHub</button>
    </a>
  <a href="https://plovato97.github.io/Day-Scheduler/" target="_blank">
    <button>Website</button>
  </a>
  </div>
 </div>
 <div className="col-lg-4 card bg-dark text-white">
<h5 className="card-title">{ projects[5].projectName }</h5>
    <p className="card-text">{ projects[5].projectDescription}</p>
   <img className="card-img" src={ projects[5].projectImg } alt="Card image"></img>
   <div className="card-img-overlay">
    <a href="https://github.com/Plovato97/Magic-trav" target="_blank">
    <button>GitHub</button>
  </a>
  <a href="https://plovato97.github.io/Magic-trav/" target="_blank">
    <button>Website</button>
  </a>
  </div>
 </div>
 </div>
</>
    )
}