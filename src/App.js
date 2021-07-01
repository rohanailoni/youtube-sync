import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IntiateSession from "./IntiateSession";
import CreateRoom from "./CreateRoom";
function App() {

  const [leader, setLeader] = useState(false);
  const [sessionID, setSessionID] = useState(null);
  const [videoID, setVideoID] = useState(null);
  const setter =(leader,sessionid,videoID)=>{
      setLeader(leader);
      setSessionID(sessionid);
      setVideoID(videoID);

  }
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route
              exact
              path='/'
              render={() => <IntiateSession setter_fun={setter} />}
            />
            <Route
              path='/watch/:roomid'
              render={() => (
                <CreateRoom
                    Leader={leader}

                />
              )}
            />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
