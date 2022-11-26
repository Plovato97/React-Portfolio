import React from 'react';

import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className='navBar'>
      <Nav />
      <div>
        <About />
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
