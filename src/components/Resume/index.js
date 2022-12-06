import React from 'react';
import '../../App.css';
import Pdf from "../../utils/Resume.pdf";



export default function Resume() {
  function handleClick(e) { e.preventDefault(); window.open(Pdf); }

  return (
    <>
      <div>
                  Programming Languages
                <br></br>
                <ul>
                  <p className='skills'>HTML5</p>
                  <p className='skills'>CSS3</p>
                  <p className='skills'>JavaScript ES6+</p>
                  <br></br>
                  <br></br>
                  <br></br>
                  </ul>
                  Front End
                <br></br>
                <ul>
                  <p className='skills'>Material Ui</p>
                  <p className='skills'>Bootstrap</p>
                  <p className='skills'>jQuery</p>
                  <p className='skills'>Bulma</p>
                  </ul>
                  <br></br>
                  Back End
                  <br></br>
                  <ul>
                  <p className='skills'>Node.js</p>
                  <p className='skills'>Express.js</p>
                  <p className='skills'>React</p>
                  <p className='skills'>MongoDB</p>
                  <p className='skills'>MySQL</p>
                  <p className='skills'>NoSQl</p>
                  <p className='skills'>API</p>
                  </ul>
      </div>
 
        <h2 className='h2'>Download my resume</h2>
        <button className="resume-btn" onClick={handleClick}>Click Here!</button>

      <br></br>
      <br></br>
    </>
  )

}