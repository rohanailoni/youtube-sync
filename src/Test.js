import React from "react";

import YouTube from "react-youtube";

function Test(){
    function ready(e){
        console.log(e)
        e.target.seekTo(10,true);
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {

            autoplay: 1,

        },
    }

    return(
      <div id="player">
        <YouTube videoId='Cbnjj4ADdNw' onReady={ready} opts={opts}/>
      </div>
    );
}


export default Test