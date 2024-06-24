import React,{useContext} from 'react'
import  {SocketContext} from '../SocketContext'

function Notifications () {
  const {answerCall, call, callAccepted} = useContext(SocketContext)
  return (
    <>
    {
      call.isReceivingCall && !callAccepted && (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'between', alignItems: 'center', height: '70vh', width: '100vw'}}>
          <h1>{call.name} is calling</h1>
          <button style={{width: '30%',height:"40px",backgroundColor:"blue",color:"white",borderRadius:"10px",border:"none"}} onClick={answerCall}>Answer</button>
        </div>
      )
    }
    </>
  )
}

export default Notifications