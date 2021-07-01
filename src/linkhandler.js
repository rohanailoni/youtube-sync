import React from "react";
import {ToastContainer,toast} from "react-toastify";

function validateYouTubeUrl(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
};

function Invalid(){
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
}

export function Linkhandler(url){
    const videoID = validateYouTubeUrl(url);
  if (!videoID) {
    Invalid();
    return;
  }
  return videoID;


}