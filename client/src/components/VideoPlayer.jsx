import React, { useContext } from 'react'
import {  SocketContext} from '../SocketContext'
function VideoPlayer  () {
  const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext( SocketContext)
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'between', alignItems: 'center', height: '70vh', width: '100vw'}}>

      {/* our own video */}

      {
        stream && (

      <div style={{height: '50vh', width: '35vw', backgroundColor: 'white', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px',margin: '20px'}}>
        <p style={{ fontWeight: 'bold',fontSize: '25px'}}>{name || 'Name'}</p>
        <video playsInline muted ref={myVideo} autoPlay style={{width: '100%', height: '100%'}}/>
      </div>
        )
      }

      {/* user's video */}
      {
        callAccepted && !callEnded && (
      <div style={{height: '50vh', width: '35vw', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px',margin: '20px'}}>
        <p style={{ fontWeight: 'bold',fontSize: '25px'}}>{call.name || 'Name'}</p>
        <video playsInline muted ref={userVideo} autoPlay style={{width: '100%', height: '100%'}}/>
      </div>) 
      }
    </div>
  )
}

export default VideoPlayer