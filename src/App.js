import React from 'react';
import Header from './Components/Header';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Services />
        <Projects />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
