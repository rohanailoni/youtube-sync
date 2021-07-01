import React, {useEffect} from "react";
import {useParams,useHistory} from 'react-router-dom'
import Video from "./Video";
import Test from "./Test";

function CreateRoom(props){
  let {roomid} = useParams()
  const history = useHistory();
  const serverAddress = 'ws://localhost:8000/rooms/'+roomid+"/";
  const socket = new WebSocket(serverAddress);


  useEffect(()=>{
      socket.onopen=()=>{
          console.log("connection opened to web socket");

      }

  })
    return(
        <div>
            <h1> you are in  a private room {roomid} </h1>
            <Video socket={socket} leader={props.Leader}/>
            {/*<Test/>*/}
        </div>
    )
}
export default CreateRoom