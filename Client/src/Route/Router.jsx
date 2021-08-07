import React from "react";
import { Route, Switch } from "react-router-dom";
import Peer from "simple-peer";
import Articles from "../Components/Articles/Articles";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MentorLogin from "../Components/MentorLogin/MentorLogin";
import MentorRegister from "../Components/MentorRegister/MentorRegister";
import Navbar from "../Components/Navbar/Navbar";
import News from '../Components/News/News';
import Register from "../Components/Register/Register";
import SearchResult from "../Components/SearchResult/SearchResult";
import UserProfile from "../Components/UserProfile/UserProfile";
import VideoConference from "../Components/VideoConference/VideoConference";

function Router({ socket }) {
  const [callState, setCallState] = React.useState(false);
  const [loadState, setLoadState] = React.useState(false);
  const [stream, setStream] = React.useState();
  const [receivingCall, setReceivingCall] = React.useState(false);
  const [caller, setCaller] = React.useState("");
  const [callerName, setCallerName] = React.useState("");
  const [callerSignal, setCallerSignal] = React.useState();
  const [callAccepted, setCallAccepted] = React.useState(false);
  const [callEnded, setCallEnded] = React.useState(false);
  const myVideo = React.useRef();
  const userVideo = React.useRef();
  const connectionRef = React.useRef();
  React.useEffect(() => {
    if (socket && loadState) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          myVideo.current.srcObject = stream;
        });
      socket.on("callUser", (data) => {
        console.log("callUser", data);
        setReceivingCall(true);
        setCaller(data.from);
        setCallerName(data.name);
        setCallerSignal(data.signal);
      });
    }
  }, [socket, loadState]);
  const callUser = (connect, username) => {
    setCallState(true);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: connect,
        signalData: data,
        from: socket.id,
        name: username,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setCallState(false);
    connectionRef.current.destroy();
  };

  const handleCall = (caller, name) => {
    callUser(caller, name)
    setCallState(true)
  }

  return (
    <>
      <Navbar />
      <VideoConference
        setLoadState={setLoadState}
        stream={stream}
        myVideo={myVideo}
        callAccepted={callAccepted}
        callEnded={callEnded}
        leaveCall={leaveCall}
        userVideo={userVideo}
        receivingCall={receivingCall}
        callerName={callerName}
        answerCall={answerCall}
        callState={callState}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/search/:query">
          <SearchResult />
        </Route>
        <Route exact path="/mentor-login">
          <MentorLogin />
        </Route>
        <Route exact path="/mentor-register">
          <MentorRegister />
        </Route>
        <Route exact path="/profile/:type/:id">
          <UserProfile socket={socket} handleCall={handleCall} />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/blog">
          <Blogs />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
