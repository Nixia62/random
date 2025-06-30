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
            Dear [Name],<br /><br />
            I don’t know how to start, but I know I need to say I’m sorry.
            You mean a lot to me, and the last thing I ever wanted was to hurt you...
            <br /><br />
            With all my heart,<br />
            [Your Name]
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterContent;
