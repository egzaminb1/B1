import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import "./player.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = (props) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);
   const [initial, setInitial] = useState(true);
   const [iterate, setIterate] = useState(props.iterate);
   const [count, setCount] = useState(10);

  let tracks=props.tracks
  const audioSrc=tracks[trackIndex]

  // Refs
   const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration} = audioRef.current;
  //audioRef.current.volume=0.9

//------------------------------------------------
  var formatTime= function(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
var durationHTML = formatTime(Math.round(duration));
// Determine our current seek position.
var timerHTML = formatTime(Math.round(trackProgress));
//------------------------------------------------


  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #777), color-stop(${currentPercentage}, #f00))
  `;
  // const trackStyling = `
  //   -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  // `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    

    intervalRef.current = setInterval(() => {

      if (audioRef.current.ended) {
         toNextTrack();
         
         if(trackIndex===tracks.length-1){
          setTimeEnd(true)
          setIterate(iterate-1)
         }
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setIsPlaying(false)
        setTrackProgress(0)
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  //----------------------
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setIsPlaying(false);
      setInitial(true)
      setIterate(props.iterate)
      setTimeEnd(false)
      setTrackIndex(0)
      setCount(10)
  }, [tracks]);

  const resInitial=()=>{
      setInitial(false)
  }

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
          timerHTML={timerHTML}
          durationHTML={durationHTML}
          iterate={iterate}
          numLoop={props.iterate}
          timeEnd={timeEnd}
          initial={initial}
          resInitial={resInitial}
          count={count}
        />
        
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
