import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import './Services.css';
import Card from './Card';


const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { title: 'Yazılım geliştirme' ,description: 'Custom web solutions', image: './Assets/veriMerkezi.jpg' },
    { title: 'uygulama geliştirme' ,description: 'Custom web solutions', image: './Assets/uygulamaGelistirme.jpg' },
 
    { title: 'Danışmanlık', description: 'Mobile and desktop apps', image: './Assets/sap.jpg' },
    
    { title: 'Siber Güvenlik', description: 'Mobile and desktop apps', image: './Assets/siberguvenlik.jpg' },
    
    { title: 'İleri Veri Analitiği', description: 'Mobile and desktop apps', image: './Assets/ileriverianalitigi.jpg' },
    
    // Daha fazla servis ekleyin
  ];
  const handleScroll = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const topPosition = servicesSection.getBoundingClientRect().top;
      const bottomPosition = servicesSection.getBoundingClientRect().bottom;
      
      if (topPosition < window.innerHeight && bottomPosition > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element name="services">
      <section
        id="services"
        className={`services ${isVisible ? 'slide-in-left' : 'slide-out-right'}`}
      >
        <h2>Hizmetlerimiz</h2>
          <div className="card-container">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
      </section>
    </Element>
  );
};

export default Services;
