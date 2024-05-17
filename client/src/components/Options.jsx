import React, { useContext, useState } from 'react'
import { SocketContext } from '../SocketContext'
function Options  ({children}) {
  const {me, call, callAccepted, name, setName, leaveCall, answerCall, callEnded, stream, callUser} = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  const [callerName, setCallerName] = useState('')
    return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:"full"}}>
        <div style={{ width:"70vw",backgroundColor:"white", display: 'flex', justifyContent: 'between', alignItems: 'center', borderRadius: '10px', margin: '20px'}}>
<div style={{height: '50vh', width: '60vw',flexDirection: 'column', backgroundColor:"white", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', margin: '20px'}}>

<p style={{ fontWeight: 'bold',fontSize: '25px',marginBottom:"70px"}}>
  Accout Information
</p>
<input
type='text'
value={callerName}
onChange={(e) => setCallerName(e.target.value)}
placeholder='Name'
style={{width: '50%',height:"30px",marginBottom:"10px"}}
/>
<button
  style={{width: '30%',height:"40px",backgroundColor:"blue",color:"white",borderRadius:"10px",border:"none"}}
>
  Copy Your Id
</button>

</div>

<div style={{height: '50vh', width: '60vw',flexDirection: 'column', backgroundColor:"white", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', margin: '20px'}}>

<p style={{ fontWeight: 'bold',fontSize: '25px',marginBottom:"70px"}}>
  Make a call
</p>
<input
type=''
value={idToCall}
onChange={(e) => setIdToCall(e.target.value)}
placeholder='ID'
style={{width: '50%',height:"30px",marginBottom:"10px"}}
/>
{callAccepted && !callEnded ? (
  <button
  style={{width: '30%',height:"40px",backgroundColor:"red",color:"white",borderRadius:"10px",border:"none"}}
  onClick={leaveCall}
  >
    Hang Up
  </button>
) : (
  <button
  style={{width: '30%',height:"40px",backgroundColor:"green",color:"white",borderRadius:"10px",border:"none"}}
  onClick={() => callUser(idToCall)}
  >
    Call
  </button>
)}

</div>

        </div>
        
        {children}
    </div>
  )
}

export default Options