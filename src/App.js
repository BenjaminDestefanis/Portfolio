import React from 'react';

import './App.css';

//Components

import Header from './components/Header';
import Home from './components/home/Home';
import About from './about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'
/* import Portfolio from './components/portfolio/Portfolio'; */
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main className='home'>

        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Portfolio /> */}
        <Qualification />
        <Contact />
        <Footer />

      </main>

      <ScrollUp />

    </div>
  );
}


export default App;
