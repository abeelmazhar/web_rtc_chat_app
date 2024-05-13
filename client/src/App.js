import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'


const App= ()=>{
  return (
    <>
 <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
 <div  style={{height: '10vh', width: '30vw', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', margin: '20px'}}>
        <p style={{ fontWeight: 'bold',fontSize: '25px'}}>Video Chat App</p>
    </div>
    <div className="bg-green-500 w-full h-full">
    <VideoPlayer/>
    <Options>
    <Notifications/>
    </Options>
    </div>
 </div>
   

        
    </>
  )
}

export default App
