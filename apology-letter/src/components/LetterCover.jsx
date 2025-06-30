import React from 'react';
import envelopeImg from '../assets/envelope.png';
import './LetterCover.css';

const LetterCover = ({ onOpen }) => {
  return (
    <div className="cover-container">
      <p>click on the letter</p>
      <img
        src={envelopeImg}
        alt="Letter Cover"
        className="envelope-img"
        onClick={onOpen}
      />
    </div>
  );
};

export default LetterCover;
