import React, {useEffect, useState} from "react";
import './video.css'
var player;

function Video(props){
    const [video,setvideo]=useState('Cbnjj4ADdNw');
    const onPlayerReady =(event)=>{
        // props.socket.send(JSON.stringify(
        //     {
        //         action:'start',
        //
        //     }
        // ))

      //event.target.playVideo();
    }

    const onPlayerStateChange=(event)=>{
        var time_action=player.getCurrentTime();
        var state=player.get
    }
    const loadVideo = ()=>{
        if(!player){
            console.log(video);
            player = new window.YT.Player('player', {
                height: '390',
                width: '640',
                videoId: video,
                playerVars: {
                  'playsinline': 1,
                    'muted':1,

                },
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
              });
        }
        else{
            player.loadVideoById(video);
        }
    }
    useEffect(()=>{
            props.socket.onmessage=(event)=>{
                const msg=JSON.parse(event.data);
                if(msg['action'] === 'sync' && msg['event'] === 'current_admin_time_req' && props.leader){
                    console.log(" fucker you are working fine hoorah");
                    props.socket.send(JSON.stringify({
                        action:'sync',
                        event:'current_admin_time_sent',
                        time:player.getCurrentTime(),

                    }));
                    }
                if(msg['action'] === 'sync' && msg['event'] === 'current_admin_time_sent'  && !props.leader){
                    const t=msg['time'];
                    player.seekTo(t,true)

                }

            }





            if(video !== null){
                console.log("window"+window.YT)
                if(!window.YT){
                    const tag = document.createElement('script');
                    tag.src = 'https://www.youtube.com/iframe_api';

                    window.onYouTubeIframeAPIReady = loadVideo;

                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }
                else{
                    loadVideo();

                }
            }

    },[])
    const sync=()=>{
        props.socket.send(JSON.stringify({
            action:'sync',
            event:"current_admin_time_req",


        }))
    }
    const startvideo=()=>{
        player.playVideo();
    }
    return (
        <>
            <h1>this is video container</h1>
            <button onClick={startvideo}>press me to start</button>
            <button onClick={sync}> sync</button>
            {props.leader ?
                <div className='player__container'>
                    <div id='player'>

                    </div>
                </div>
                :
                (<div className='player__container disable_touch'>
                    <div id='player'>

                    </div>
                </div>
                )

            }
        </>
    );
}



export default Video