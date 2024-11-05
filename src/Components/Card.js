import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          {image && <img src={image} alt={title} className="card-image" />}
          <p className="front-heading">{title}</p>
        </div>
        <div className="back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
