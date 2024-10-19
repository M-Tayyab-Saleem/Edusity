import React, { useEffect, useRef } from 'react'
import "./Video.css"
import video from "../assets/video.mp4"

const Video = ({playState, setplayState}) => {
    let player = useRef(null); 

    let closePlayer = (e)=>{
        if(e.target == player.current){
            setplayState(false)
        }
    }

  return (
    <div className={`video-player ${playState ? '' : "hide"}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay controls muted></video>
    </div>
  )
}

export default Video