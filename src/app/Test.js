
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
    // let videoId = 'bdba5a0c-34af-4afa-bd1b-d669ca6caff6';
    // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaXRlIjoibGl2LWdvbGYiLCJzaXRlSWQiOiI5ZWQ3ZGVlMC1jNzE5LTExZWMtYmMyNS1hMTk1YzJhMzQzNTciLCJhbm9ueW1vdXNJZCI6IjNiYzljNjM3N2VhNDFmNTY5Yzg3ZGIwODczZWI3YzcyNjYwYjI2ZmVhMmU3YWM4MjBmMDVhNzZjMzZlNzdhZWYiLCJpZCI6IjE2MGMzNmUyLWZjMTctMTFlZC04MGQ5LTdmYzI5NzE0NzliZCIsInVzZXJJZCI6IjE2MGMzNmUyLWZjMTctMTFlZC04MGQ5LTdmYzI5NzE0NzliZCIsImlwYWRkcmVzcyI6Ijc4LjYyLjI1Mi42IiwiaXBhZGRyZXNzZXMiOiI3OC42Mi4yNTIuNiwgMTAuMTIwLjM5LjE2NiwgMzUuMTc0LjEyOS43NywgMTMwLjE3Ni45OC4xNjAiLCJ1c2VybmFtZSI6ImFub255bW91cyIsImNvdW50cnlDb2RlIjoiTFQiLCJwb3N0YWxjb2RlIjoiNDYwMDEiLCJwcm92aWRlciI6InZpZXdsaWZ0IiwiZGV2aWNlSWQiOiJhdXRvLTE2MGMzNmUxLWZjMTctMTFlZC04MGQ5LTdmYzI5NzE0NzliZCIsImlhdCI6MTY4NTE0MTE2MCwiZXhwIjoxNzE2Njc3MTYwfQ.awqQz7kyl02xYHHUYBNBvY8sIQOuzOCOPuPkn_vL14g';
    let videoId='1e039e7f-5986-4712-a780-d9c49406487b';
    let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoibW9udW1lbnRhbC1uZXR3b3JrIiwic2l0ZUlkIjoiMDAwMDAxNTEtMTFiNC1kMjliLWExN2QtNTVmZGIyYjgwMDAwIiwiaWQiOiIxM2VlNzJhMi0zMmY0LTQ3YjUtODdkMi02YWI5N2Y3ZWE0MjMiLCJ1c2VySWQiOiIxM2VlNzJhMi0zMmY0LTQ3YjUtODdkMi02YWI5N2Y3ZWE0MjMiLCJpcGFkZHJlc3NlcyI6IjE4MC4xNTEuNzMuMTA2LCAxMzAuMTc2LjE4Ny41MSwxMC40MC43MS4yMzAiLCJjb3VudHJ5Q29kZSI6IklOIiwicG9zdGFsY29kZSI6IiIsInByb3ZpZGVyIjoiZ29vZ2xlIiwiZGV2aWNlSWQiOiJicm93c2VyLTNlNGNmZGNlLWFjYWMtM2MwOS0yNjlmLTgxZGU0YTRmNzRhNSIsImVtYWlsIjoiZGFtYW5kZWVwc2luZ2hAdmlld2xpZnQuY29tIiwiaWF0IjoxNzExNDU0MzEzLCJleHAiOjE3MTE0NTYxMTN9.ffyuNOklD0rOGCuYWrVQUj6X8Sq02T2-MWDuekotziQ';
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
        apiBaseUrl:'https://api.monumentalsportsnetwork.com',
        // apiBaseUrl:'https://api.prod-livgolfplus.viewlift.com'

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
