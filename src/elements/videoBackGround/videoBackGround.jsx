import React from 'react';
import s from "./videoBackGround.module.css"
const VideoBackground = () => {
  return (
    <video autoPlay muted="muted" loop  className={s.myVideo}>
      <source src="video/hw.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;