import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
function App (){
  return (
    <>
    {/* <AppBar position="static" backgroundcolor="inherit" >
<Typography variant="h2" align="center" color='primary'>
  Video Chat App
</Typography>
    </AppBar> */}
    <div style={{height: '10vh', width: '100vw', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{ fontWeight: 'bold',fontSize: '25px'}}>Video Chat App</p>
    </div>
    <div className="bg-green-500 w-full h-full">
    {/*VideoPlayer*/}
    <VideoPlayer/>
    {/*Options -> notifications*/}
    <Options>
    <Notifications/>
    </Options>
    </div>

        
    </>
  )
}

export default App