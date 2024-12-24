
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
    let videoId = '85e3a7fb-f17b-496a-9575-7c7a4ffc5037';
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoibGl2LWdvbGYiLCJzaXRlSWQiOiI5ZWQ3ZGVlMC1jNzE5LTExZWMtYmMyNS1hMTk1YzJhMzQzNTciLCJpZCI6ImQyMjllODgwLTVlZWQtNGM3YS1iZWZmLTVmODYxMjQwNTFhYiIsInVzZXJJZCI6ImQyMjllODgwLTVlZWQtNGM3YS1iZWZmLTVmODYxMjQwNTFhYiIsImFub255bW91c0lkIjoiNWVkOTBiNjFhZjE1MWVkMThmNjVlM2I0NTg0NzhiYmMzZDZhNGNiNDQ3YTQzNDEwZmJlYzRhMzE0OTk0NWQzNSIsInVzZXJuYW1lIjoiYW5vbnltb3VzIiwiaXBhZGRyZXNzIjoiMTIyLjE2MS43OS43NyIsImlwYWRkcmVzc2VzIjoiMTIyLjE2MS43OS43NywxMC4xNjAuMC4xMDQiLCJjb3VudHJ5Q29kZSI6IklOIiwicG9zdGFsY29kZSI6IjExMDAwOCIsInByb3ZpZGVyIjoidmlld2xpZnQiLCJkZXZpY2VJZCI6ImJyb3dzZXItMmIxOTg4ZmQtYjczZC0zYzgzLWY0NDItNmFkZGQ4ZWVjYTIwIiwiaWF0IjoxNzE1OTQ0NzE0LCJleHAiOjE3NDc0ODA3MTR9.znAa1UpA3XzSUdwrkBXwudxFEMrXA-TShBt31bAW3oc';
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
