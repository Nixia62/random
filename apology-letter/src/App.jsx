import React, { useState } from 'react';
import LetterCover from './components/LetterCover';
import LetterContent from './components/LetterContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? <LetterContent /> : <LetterCover onOpen={() => setIsOpen(true)} />}
    </div>
  );
}

export default App;
