import '../styles/Slide.css';
import React from 'react';

function Slide({ image }) {
  return (
    <div className="slide">
      <img src={image} className="image" />
    </div>
  );
}

export { Slide };
