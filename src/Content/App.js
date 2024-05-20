import '../Css/App.css';
import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import SocialLinks from './SocialLinks';
import Home from './Home';

function Main() {
  return (
    <div className="App">
      <div className="App-header">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
      </div>
    </div>
  );
};

export default Main;