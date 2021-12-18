import React from "react";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import TimeClass from "./TimerClass";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  timerHTML,
  durationHTML,
  iterate,
  timeEnd,
  initial,
  resInitial,
  count,
  numLoop
}) => {

return(
  <div className="audio-controls">
    {isPlaying ? (
      <button
        id="butPlay"
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        id="butPlay"
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    
    {numLoop===2?<TimeClass iterate={iterate} count={count} timeEnd={timeEnd} onPlay={onPlayPauseClick} initial={initial} resInitial={resInitial}></TimeClass>:null}

    {<div id='duration'><p>{timerHTML} / {durationHTML}</p></div>}
  </div>
)}

export default AudioControls;
