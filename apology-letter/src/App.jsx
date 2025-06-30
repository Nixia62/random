import React, { useState } from 'react';
import LetterCover from './components/LetterCover';
import LetterContent from './components/LetterContent';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <LetterCover onOpen={() => setOpened(true)} />
      ) : (
        <LetterContent />
      )}

      <MusicPlayer play={opened} />
    </>
  );
}

export default App;
