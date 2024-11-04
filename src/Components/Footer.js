import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Footer.css'; // Footer bileşenine ait CSS dosyasını import ediyoruz





const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutUsSection = document.getElementById('footer');
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
    <Element name="footer">
      <section
        id="footer"
        className={`footer ${isVisible ? 'slide-in-left' : 'slide-out-right'}`}
      >
        <h2>Footer</h2>
        <p>.</p>
        <p>T</p>
      </section>
    </Element>
  );
};

export default Footer;
