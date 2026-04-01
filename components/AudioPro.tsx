"use client";
import { useRef, useState, useEffect } from "react";

export default function AudioPro({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      document.querySelectorAll("audio").forEach((a) => a.pause());

      audio.currentTime = 0;
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  // ⏱ actualizar progreso
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  // ⏹ cuando termina
  const handleEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  // ⏩ click en barra
  const handleSeek = (e: any) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    audio.currentTime = percent * duration;
  };

  // ⏱ formato tiempo
  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const percent = duration ? (progress / duration) * 100 : 0;

  return (
    <div className="audio-pro">

      <button className="play-btn" onClick={togglePlay}>
        {playing ? "⏸" : "▶"}
      </button>

      <div className="audio-content">

        <p className="audio-title">{title}</p>

        {/* barra */}
        <div className="progress-bar" onClick={handleSeek}>
          <div
            className="progress"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* tiempo */}
        <div className="time">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>

      </div>

      <audio
        ref={audioRef}
        src={src}
        onEnded={handleEnded}
        preload="auto"
      />
    </div>
  );
}