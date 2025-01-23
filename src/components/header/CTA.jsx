import React from 'react';
import CV from '../../assets/ADARSH RAJKUMAR PATIL_offer_letter.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={""} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
