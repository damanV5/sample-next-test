
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
        apiBaseUrl:'https://livgolfplus.staging.api.viewlift.com',
        customData:{
         overrideEntitlementResponse: {
            "siteName": "spinco",
            "siteId": "cea398b9-09ab-4331-958f-8c3d6a356b88",
            "playable": true,
            "success": true,
            "video": {
                "id": "f58191a4-08da-4639-9249-86ed458abfc6",
                "title": "The Outfit (2022)",
                "gist": {
                    "id": "f58191a4-08da-4639-9249-86ed458abfc6",
                    "site": "spinco",
                    "permalink": "/video/the-outfit-2022",
                    "title": "The Outfit (2022)",
                    "description": "The film follows Leonard, an English tailor who used to craft suits on London's world-famous Savile Row. But after a personal tragedy, he's ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
                    "imageGist": {
                        "r16x9": "https://spinco.staging.asset.viewlift.com/images/2025/05/08/p21031766_v_h8_ad.jpg",
                        "r3x4": "https://spinco.staging.asset.viewlift.com/images/2025/05/08/p21031766_v_v13_ad.jpg",
                        "r1x1": "https://spinco.staging.asset.viewlift.com/images/2025/05/08/p21031766_v_s4_av.jpg",
                        "r2x3": "https://spinco.staging.asset.viewlift.com/images/2025/05/08/p21031766_v_v12_ad.jpg"
                    },
                    "primaryCategory": {},
                    "contentType": "VIDEO",
                    "languageCode": "en",
                    "timezone": "America/New_York",
                    "featuredTag": {}
                },
                "monetizationModels": [
                    {
                        "id": "c3bad4f4-7455-4700-8a9f-ef709fc29116",
                        "type": "FREE"
                    }
                ],
                "parentalRating": "TV-MA",
                "showInAdvance": false,
                "free": false,
                "runtime": 6033,
                "skipIntroStartTime": 0,
                "skipIntroEndTime": 0,
                "skipRecapStartTime": 0,
                "skipRecapEndTime": 0,
                "playNextTime": 0,
                "streamingInfo": {
                    "isLiveStream": false,
                    "videoAssets": {
                        "mpeg": [
                            {
                                "rendition_value": "1080",
                                "url": "http://usafeed.download.nbcuni.com/video/0ZM/6ao/8000012198/1732190169347-n1Obv/HD_TVE_OUTFIT2022_11222024_7830k.mp4"
                            }
                        ],
                        "fairPlay": {
                            "url": "https://1ff8c82872124bb6a0635cbc885602cb.mediatailor.us-east-1.amazonaws.com/v1/master/a2769ff6f508fb0f68aca8782209ab59ae7a5db0/SpincoBitmovinAds/Renditions/20250508/1746690807943_spinco_HD_TVE_OUTFIT2022_11222024_7830k_CUSTOM_CODEC_TS_DRM_DASH_DRM/hls/masterMod.m3u8?ads.prof=VIEWLIFT_PROF&ads.csid=VIEWLIFT_CSID&ads.caid=USA_VOD_8000012198&ads.vdur=VIEWLIFT_DURATION&ads.sfid=VIEWLIFT_SFID&ads._fw_vcid2=VIEWLIFT_USER&ads._fw_gdpr=VIEWLIFT_GDPR&ads._fw_gdpr_consent=VIEWLIFT_US_PRIVACY&ads._fw_us_privacy=VIEWLIFT_US_PRIVACY&ads._fw_is_lat=VIEWLIFT_LAT&ads._fw_did=VIEWLIFT_DEVICE_ID&ads._fw_ae=VIEWLIFT_TVE_PROVIDER&ads._fw_app_bundle=VIEWLIFT_APP_BUNDLE&ads._fw_player_width=VIEWLIFT_WIDTH&ads._fw_player_height=VIEWLIFT_HEIGHT&ads._fw_atts=VIEWLIFT_ATT_CONSENT",
                            "certificateUrl": "https://spinco.staging.asset.viewlift.com/Certs/fairplay-Spinco.cer",
                            "licenseUrl": "https://e118bd38.drm-fairplay-licensing.axprod.net/AcquireLicense",
                            "skd": "4ccf0736-9b39-4f53-a572-3a07e4c94932",
                            "completeskd": "4ccf0736-9b39-4f53-a572-3a07e4c94932:b40f912585c30a5ff0187612afa28f99",
                            "licenseToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21fa2V5X2lkIjoiZGViOTU3NDUtZmRkNS00Yjc1LWI4NDktYjJhNjAwOTczNzQ1IiwiZXhwIjoxNzUwNzQ0ODg4LCJtZXNzYWdlIjp7ImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJmYWlycGxheSI6eyJhbGxvd19haXJwbGF5Ijp0cnVlLCJhbGxvd19hdl9hZGFwdGVyIjp0cnVlLCJoZGNwIjoiTk9ORSJ9LCJuYW1lIjoiUG9saWN5IEEiLCJwbGF5cmVhZHkiOnsibWluX2RldmljZV9zZWN1cml0eV9sZXZlbCI6MjAwMCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX0sIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiI0Y2NmMDczNi05YjM5LTRmNTMtYTU3Mi0zYTA3ZTRjOTQ5MzIiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX0sImxpY2Vuc2UiOnsiZHVyYXRpb24iOjQzMjAwfSwidHlwZSI6ImVudGl0bGVtZW50X21lc3NhZ2UiLCJ2ZXJzaW9uIjoyfSwidmVyc2lvbiI6MX0.0BRJmwDvy8AWy6hDdP2JhItduwEs0hbqmqcTuKfx-f8"
                        },
                        "playReady": {
                            "url": "https://1ff8c82872124bb6a0635cbc885602cb.mediatailor.us-east-1.amazonaws.com/v1/dash/a2769ff6f508fb0f68aca8782209ab59ae7a5db0/SpincoBitmovinAds/Renditions/20250508/1746690807943_spinco_HD_TVE_OUTFIT2022_11222024_7830k_CUSTOM_CODEC_TS_DRM_DASH_DRM/dash/streamMod1.mpd?ads.prof=VIEWLIFT_PROF&ads.csid=VIEWLIFT_CSID&ads.caid=USA_VOD_8000012198&ads.vdur=VIEWLIFT_DURATION&ads.sfid=VIEWLIFT_SFID&ads._fw_vcid2=VIEWLIFT_USER&ads._fw_gdpr=VIEWLIFT_GDPR&ads._fw_gdpr_consent=VIEWLIFT_US_PRIVACY&ads._fw_us_privacy=VIEWLIFT_US_PRIVACY&ads._fw_is_lat=VIEWLIFT_LAT&ads._fw_did=VIEWLIFT_DEVICE_ID&ads._fw_ae=VIEWLIFT_TVE_PROVIDER&ads._fw_app_bundle=VIEWLIFT_APP_BUNDLE&ads._fw_player_width=VIEWLIFT_WIDTH&ads._fw_player_height=VIEWLIFT_HEIGHT&ads._fw_atts=VIEWLIFT_ATT_CONSENT",
                            "licenseUrl": "https://e118bd38.drm-playready-licensing.axprod.net/AcquireLicense",
                            "skd": "4ccf0736-9b39-4f53-a572-3a07e4c94932",
                            "licenseToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21fa2V5X2lkIjoiZGViOTU3NDUtZmRkNS00Yjc1LWI4NDktYjJhNjAwOTczNzQ1IiwiZXhwIjoxNzUwNzQ0ODg4LCJtZXNzYWdlIjp7ImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJmYWlycGxheSI6eyJhbGxvd19haXJwbGF5Ijp0cnVlLCJhbGxvd19hdl9hZGFwdGVyIjp0cnVlLCJoZGNwIjoiTk9ORSJ9LCJuYW1lIjoiUG9saWN5IEEiLCJwbGF5cmVhZHkiOnsibWluX2RldmljZV9zZWN1cml0eV9sZXZlbCI6MjAwMCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX0sIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiI0Y2NmMDczNi05YjM5LTRmNTMtYTU3Mi0zYTA3ZTRjOTQ5MzIiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX0sImxpY2Vuc2UiOnsiZHVyYXRpb24iOjQzMjAwfSwidHlwZSI6ImVudGl0bGVtZW50X21lc3NhZ2UiLCJ2ZXJzaW9uIjoyfSwidmVyc2lvbiI6MX0.0BRJmwDvy8AWy6hDdP2JhItduwEs0hbqmqcTuKfx-f8"
                        },
                        "widevine": {
                            "url": "https://1ff8c82872124bb6a0635cbc885602cb.mediatailor.us-east-1.amazonaws.com/v1/dash/a2769ff6f508fb0f68aca8782209ab59ae7a5db0/SpincoBitmovinAds/Renditions/20250508/1746690807943_spinco_HD_TVE_OUTFIT2022_11222024_7830k_CUSTOM_CODEC_TS_DRM_DASH_DRM/dash/streamMod1.mpd?ads.prof=VIEWLIFT_PROF&ads.csid=VIEWLIFT_CSID&ads.caid=USA_VOD_8000012198&ads.vdur=VIEWLIFT_DURATION&ads.sfid=VIEWLIFT_SFID&ads._fw_vcid2=VIEWLIFT_USER&ads._fw_gdpr=VIEWLIFT_GDPR&ads._fw_gdpr_consent=VIEWLIFT_US_PRIVACY&ads._fw_us_privacy=VIEWLIFT_US_PRIVACY&ads._fw_is_lat=VIEWLIFT_LAT&ads._fw_did=VIEWLIFT_DEVICE_ID&ads._fw_ae=VIEWLIFT_TVE_PROVIDER&ads._fw_app_bundle=VIEWLIFT_APP_BUNDLE&ads._fw_player_width=VIEWLIFT_WIDTH&ads._fw_player_height=VIEWLIFT_HEIGHT&ads._fw_atts=VIEWLIFT_ATT_CONSENT",
                            "licenseUrl": "https://e118bd38.drm-widevine-licensing.axprod.net/AcquireLicense",
                            "skd": "4ccf0736-9b39-4f53-a572-3a07e4c94932",
                            "licenseToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21fa2V5X2lkIjoiZGViOTU3NDUtZmRkNS00Yjc1LWI4NDktYjJhNjAwOTczNzQ1IiwiZXhwIjoxNzUwNzQ0ODg4LCJtZXNzYWdlIjp7ImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJmYWlycGxheSI6eyJhbGxvd19haXJwbGF5Ijp0cnVlLCJhbGxvd19hdl9hZGFwdGVyIjp0cnVlLCJoZGNwIjoiTk9ORSJ9LCJuYW1lIjoiUG9saWN5IEEiLCJwbGF5cmVhZHkiOnsibWluX2RldmljZV9zZWN1cml0eV9sZXZlbCI6MjAwMCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX0sIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiI0Y2NmMDczNi05YjM5LTRmNTMtYTU3Mi0zYTA3ZTRjOTQ5MzIiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX0sImxpY2Vuc2UiOnsiZHVyYXRpb24iOjQzMjAwfSwidHlwZSI6ImVudGl0bGVtZW50X21lc3NhZ2UiLCJ2ZXJzaW9uIjoyfSwidmVyc2lvbiI6MX0.0BRJmwDvy8AWy6hDdP2JhItduwEs0hbqmqcTuKfx-f8"
                        },
                        "type": "videoAsset"
                    },
                    "audioAssets": {},
                    "secondaryVideoAssets": {
                        "type": "videoAsset"
                    }
                },
                "metadata": [
                    {
                        "name": "externalAdvertiserId",
                        "value": "USA_VOD_8000012198"
                    },
                    {
                        "name": "episodeTmsId",
                        "value": "MV017560630000"
                    }
                ],
                "publishDate": 1747812642,
                "contentType": "VIDEO",
                "mediaType": "VIDEO",
                "closedCaptions": [
                    {
                        "format": "TT",
                        "language": "English",
                        "url": "https://spinco.staging.asset.viewlift.com/ClosedCaptions/2025/05/08/8000012198/TLVOD-0000464614-GTMV0000619323-1808225_Text1.tt"
                    }
                ],
                "updateDate": 1747910720,
                "drmEnabled": true,
                "monetizationBadgeIdentifier": "free",
                "objectKey": "video",
                "seo": {},
                "airTimezone": "America/New_York",
                "seasonAirTimezone": "America/New_York",
                "status": "open",
                "isSSAIEnabled": true
            },
            "models": [
                "FREE"
            ]
        }
        }
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
