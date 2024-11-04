import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './AboutUs.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutUsSection = document.getElementById('about-us');
    const topPosition = aboutUsSection.getBoundingClientRect().top;
    /* if (topPosition < window.innerHeight * 0.75 && topPosition > 0) */
    if (topPosition < window.innerHeight * 0.75) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element name="aboutUs">
      <section
        id="about-us"
        className={`about-us ${isVisible ? 'slide-in-left' : 'slide-out-right'}`}
      >
        <h2>Hakkımızda</h2>
        <p>DEEPTECH Universe, kamu ve özel sektöre yönelik yenilikçi çözümler sunan bir teknoloji firmasıdır...</p>
        <p>Tecrübeli ekibimizle AR-GE merkezimizde en yeni teknolojiler üzerinde çalışarak müşterilerimize değer katmayı hedefliyoruz.</p>
      </section>
    </Element>
  );
};

export default AboutUs;
