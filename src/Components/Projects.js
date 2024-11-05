import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import './Projects.css';
import Card from './Card';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  //burdaki satır içerisine projelerinizi ekleyin
  const projects = [
    { title: 'Diyaloğa Dayalı Yapay Zeka', description: 'Diyaloğa Dayalı Yapay Zeka, Doğal Dil İşleme teknolojisi kullanarak farklı arayüzleri etkileşim kurulabilen interaktif sistemlere dönüştürür. Teknoloji, kullanıcıların istedikleri ifadeleri kullanarak çeşitli sistemlerle yazılı veya sözlü olarak etkileşime girmelerine olanak tanır. Böylece işletmeler, IVR sistemlerinden sanal asistanlara, chatbot lardan akıllı sistemlere uzanan farklı alanlarda konumlandırılabilen Doğal Diyalog Çözümleri ile müşterilerine sesle entegre akıllı self servis çözümler sunabilir.', image: './Assets/diyalog.jpg' },
    { title: 'Konuşma Tanıma', description: 'Konuşma Tanıma (Speech Recognition), insanların cihazlarla etkileşim kurma biçimlerinde devrim yaratan bu gelişimin ardındaki itici teknolojidir. Sestek Konuşma Tanıma ile makineler ve uygulamalar kullanıcıların konuşarak ilettikleri komutları anlayabilirler. Teknolojinin konuşarak iletilen talepleri dinleme ve anlama becerileri sayesinde kullanıcılar, cihazlarla tuş ve buton yerine konuşarak etkileşim kurabilir. DEEPTECH Universe Türkçe Konuşma Tanıma hizmeti vermektedir.', image: './Assets/sestanima.jpg' },

    { title: 'Yüz Tanıma', description: 'Yüz Tanıma teknolojisi biyometrik cihazlar içinde güvenilirlik ve temassız olma özelliği ile de hijyen açısından en avantajlı ve güvenli kontrol ve denetim sistemidir. Personel takip programına entegre edilerek, giriş ve çıkış saatlerine göre, personel aylık puantaj hesaplamaları güvenli yapılabilir. Yüz tanıma cihazlarının kullanım alanı oldukça geniştir. Her ölçekten işletmeler, fabrikalar, holdinglerde rahatça kullanılabilir.', image: './Assets/yuz_tanima.jpg' },
    // Daha fazla proje ekleyin
  ];
  const handleScroll = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const topPosition = projectsSection.getBoundingClientRect().top;
      const bottomPosition = projectsSection.getBoundingClientRect().bottom;
      
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
    <Element name="projects">
      <section
        id="projects"
        className={`projects ${isVisible ? 'slide-in-left' : 'slide-out-right'}`}
      >
        <h2>ürünler</h2>
        <div className="card-container">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
      </section>
    </Element>
  );
};

export default Projects;
