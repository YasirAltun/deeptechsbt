import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/Assets/logo_slogan.png" alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#services" className="nav-item">
          <img src="/Assets/services.png" alt="Hizmetler" />
          <span className="nav-text">Hizmetler</span>
        </a>
        <a href="#projects" className="nav-item">
          <img src="/Assets/projects.png" alt="Projeler" />
          <span className="nav-text">Projeler</span>
        </a>
        <a href="#contact" className="nav-item">
          <img src="/Assets/iletisim.png" alt="İletişim" />
          <span className="nav-text">İletişim</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
