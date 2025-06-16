
"use client"
import { useEffect, useRef, useState } from 'react';
import './test.css'

let VLPlayerCore;
const Test = () => {
  const videoRef = useRef(null);
  const tokenRef = useRef(null);
  const [status, setStatus] = useState();
  let playerId = 'my-player';


  useEffect(() => {
    let videoId = 'f58191a4-08da-4639-9249-86ed458abfc6';
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5Q29kZSI6IklOIiwiZGV2aWNlSWQiOiJicm93c2VyLWNmZWU0Yjc0LTE0N2EtMmQ5NS04YjU4LWFmNjk0YjFjZjFkYSIsImV4cCI6MTc1MTQ1MjUwMSwiaWF0IjoxNzQ4ODYwNTAxLCJpZCI6Ijc1YmY4ZjNlLTdjYzItNDBhYi05MzczLTg1YzEzNGMwOTlhMiIsImlwYWRkcmVzc2VzIjoiMjAzLjEzMi4xMzMuMTI2LDEwLjE2MC4wLjEwNCIsInBvc3RhbGNvZGUiOiIzMDEwMDEiLCJwcm92aWRlciI6ImFwYXNzaWRwIiwic2l0ZSI6InNwaW5jbyIsInNpdGVJZCI6ImNlYTM5OGI5LTA5YWItNDMzMS05NThmLThjM2Q2YTM1NmI4OCIsInVzZXJJZCI6Ijc1YmY4ZjNlLTdjYzItNDBhYi05MzczLTg1YzEzNGMwOTlhMiJ9.JBtvjmrIvv06BC_oxJJxgJWbRzL9Buww0-7HZ2USkc4';
    initPlayer(videoId, token);
  }, [])


  const initPlayer = (videoId, token) => {
    import('@viewlift/player/esm/bundle.css')
    import('@viewlift/player/esm/index').then((e) => {
      VLPlayerCore = e.default;
      let config = {
        videoId: videoId,
        playerId: playerId,
        token: token,
        autoplay:true,
        apiBaseUrl:'https://livgolfplus.staging.api.viewlift.com'
}
        

      
      VLPlayerCore().init(config).then((res) => {
        console.log(res);
        setStatus(res?.msg)
      }).catch((e) => {
        console.log(e);
        let err = e.messsage || e?.msg
        setStatus(err)
      })
    });
  }


  const loadVideo = () => {
    let videoId = videoRef.current.value
    let token = tokenRef.current.value
    if (videoId && token) {
      setStatus(null)
      if (VLPlayerCore().isPlayerInitialised(playerId)) {
        VLPlayerCore().load(playerId, videoId, token).then((res) => {
          console.log(res);
          setStatus(res?.msg)
        }).catch((e) => {
          console.log(e);
          let err = e.messsage || e?.msg
          setStatus(err)
        })
      } else {
        initPlayer(videoId, token);
      }
    }
    else
      return
  }

  return (
    <div className="App">
      <div className='cont'>
        <div><div>Video  Id:</div> <input ref={videoRef} className='video-inp' type='text' /></div>
        <div><div>Token: </div><input ref={tokenRef} className='token-inp' type='text' /></div>
        <div className='btn-container'><button onClick={() => loadVideo()} className='load-btn'>Load</button>&nbsp;{status ? status : <span className="loader"></span>}</div>
      </div>

      <div className='player-title'>VL WEB PLAYER</div>
      <div className='vl-container'>
        <video preload='auto' id='my-player' className='video-js' style={{ width: '100%', height: '100%' }}></video>
      </div>
    </div>
  );
};

export default Test;
