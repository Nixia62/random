import React from 'react';
import './LetterContent.css';
import letterBg from '../assets/letter-bg.jpeg';

const LetterContent = () => {
  return (
    <div className="letter-wrapper">
      <div
        className="letter-message"
        style={{ backgroundImage: `url(${letterBg})` }}
      >
        <div className="letter-text">
          <p>
           Im writing this because i wanted to apologise for disappearing on u and making u worry for me. im truly sorry for the stress i caused to u. it just happened and i handled it wrong ,im sorry for vanishing like that, I'll be better from here on out :3
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterContent;
