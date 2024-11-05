import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Ürünler</h3>
        <p>Diyaloğa Dayalı Yapay Zeka</p>
        <p>Konuşma Tanıma</p>
        <p>Yüz Tanıma Sistemi</p>
      </div>
      <div className="footer-column">
        <h3>Hizmetler</h3>
        <p>Uygulama Geliştirme</p>
        <p>Danışmanlık</p>
        <p>Siber Güvenlik</p>
      </div>
      <div className="footer-column">
        <h3>Ar-Ge Merkezi</h3>
        <p>Kariyer</p>
        <p>İletişim</p>
      </div>
      <div className="footer-column">
        <h3>İletişim</h3>
        <p>Adres: ASO Teknopark, Ahi Evran OSB Mah., Erkunt Cad., No: 3/52, 06935, Sincan, Ankara - TÜRKİYE</p>
        <p>Telefon: +90 312 911 00 02 (pbx)</p>
        <p>Faks: +90 312 911 00 03</p>
        <p>E-Posta: info@deeptechsbt.com</p>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tüm Hakları DEEPTECH Universe Savunma ve Bilişim Teknolojileri A.Ş.'ye Aittir. Bilgi Güvenliği Politikamız | Kalite Politikamız</p>
      </div>
    </footer>
  );
};

export default Footer;
