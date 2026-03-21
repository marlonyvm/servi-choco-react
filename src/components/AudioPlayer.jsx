import { useRef, useState } from "react";
import "./AudioPlayer.css";

function AudioPlayer() {

  const audioRef = useRef();

  const playlist = [
    {
      name: "Sonidos del Chocó",
      src: "/audio/choco1.mp3"
    },
    {
      name: "Selva y mar",
      src: "/audio/choco2.mp3"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false); // 🔥 clave

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
      setStarted(true); // 🔥 ya se activó el player
    }
  };

  const nextSong = () => {
    const next = (current + 1) % playlist.length;
    setCurrent(next);
    setPlaying(false);
  };

  const prevSong = () => {
    const prev = (current - 1 + playlist.length) % playlist.length;
    setCurrent(prev);
    setPlaying(false);
  };

  return (
    <div className="audio-player">

      {/* 🔥 MODO INICIAL */}
      {!started ? (
        <button onClick={togglePlay}>▶</button>
      ) : (
        <>
          <button onClick={prevSong}>⏮</button>

          <button onClick={togglePlay} className="play-btn">

  {playing ? (
    <div className="bars">
      <span></span>
      <span></span>
      <span></span>
    </div>
  ) : (
    "▶"
  )}

</button>

          <button onClick={nextSong}>⏭</button>

          <span className="song-name">
            {playlist[current].name}
          </span>
        </>
      )}

      <audio
        ref={audioRef}
        src={playlist[current].src}
        onEnded={nextSong}
      />

    </div>
  );
}

export default AudioPlayer;