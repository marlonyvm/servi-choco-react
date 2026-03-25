import { useRef, useState, useEffect } from "react";
import "./AudioPlayer.css";

function AudioPlayer() {

  const audioRef = useRef();

  const playlist = ["/audio/Audio1.mp3","/audio/Audio2.mp3","/audio/Audio3.mp3","/audio/Audio4.mp3"];

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
      setStarted(true);
    }
  };

  const nextSong = () => {
    setCurrent((prev) => (prev + 1) % playlist.length);
    setPlaying(true);
  };

  const prevSong = () => {
    setCurrent((prev) =>
      (prev - 1 + playlist.length) % playlist.length
    );
    setPlaying(true);
  };

  // 🔥 auto play cuando cambia canción
  useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.play();
    }
  }, [current]);

  return (
    <div className="audio-player">

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
            {"Chocó Mix"}
          </span>
        </>
      )}

      <audio
        ref={audioRef}
        src={playlist[current]}
        onEnded={nextSong}
      />

    </div>
  );
}

export default AudioPlayer;