import React from 'react';
import { useParams } from 'react-router';
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';
import style from './style.module.css';



export default function Room() {

  const {id: roomID} = useParams();
  const {clients, provideMediaRef} = useWebRTC(roomID);

  return (
    <div className={style.videoPerson}>
      {clients.map((clientID, index) => {
        return (
          <div key={clientID}>
            <video key={index}
            width='100%'
            height='100%'
            ref={(instance) => provideMediaRef(clientID, instance)}
            autoPlay
            playsInline
            muted={clientID === LOCAL_VIDEO}
            />
          </div>
        )
      })}
    </div>
    
  )
}
