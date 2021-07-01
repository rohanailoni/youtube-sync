import React, {useEffect, useState} from "react";
import {Linkhandler} from "./linkhandler";
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from 'react-router-dom';

function IntiateSession(props){
    const [url, setUrl] = useState('');
    let history=useHistory()

    const chache=(e)=>{
        e.preventDefault();
        const videoid=Linkhandler(url)
        let random_room=uuidv4().slice(0,9);
        var path='/watch/'+random_room
        props.setter_fun(true,random_room,videoid)

        history.push(path)


    }


    return(
        <>
            <form onSubmit={chache}>
                <h1>hey you are in prime session </h1>
                <input type='text' onChange={(e)=>{setUrl(e.target.value)}} value={url}/>
                <button  type='submit'>press me</button>
            </form>
        </>
    );
}

export default IntiateSession