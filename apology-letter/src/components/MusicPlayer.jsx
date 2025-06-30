import React, { useEffect, useRef } from 'react';
import bgMusic from '../assets/bg-music.mp3';

const MusicPlayer = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
      });
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src={bgMusic} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
