import React from 'react';
import './Card.css';

function Card({ title, description, imageUrl, icon }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
      <div className="card-header">
          {icon && <i className={`card-icon fas ${icon}`}></i>}
          <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </div>
  );
}

export default Card;
