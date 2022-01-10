import React from 'react'
import socketIOClient from "socket.io-client";

const Tessocket = () => {
  // const [response, setResponse] = useState("");

  React.useEffect(() => {
    const socket = socketIOClient('wss://cdn-manager-alpha.stm.trueid.net:8888/ws/edgeinfo')
    
    socket.on("FromAPI", data => {
      console.log(data);
      
      // setResponse(data);
    });
  }, [])

  return (
    <div style={{color:'black'}}>
      test socket
    </div>
  )
}

export default Tessocket
