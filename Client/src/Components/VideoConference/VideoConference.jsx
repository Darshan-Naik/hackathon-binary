import React from 'react'
import "../../Styles/VideoConference/VideoConference.css";

function VideoConference({
  setLoadState,
  stream,
  myVideo,
  callAccepted,
  callEnded,
  leaveCall,
  userVideo,
  receivingCall,
  callerName,
  answerCall,
  callState,
  rejectCall,
}) {
  React.useEffect(() => {
    setLoadState(true);
  }, []);
  return (
    <section
      className="call-model flex"
      style={{ display: callState ? "flex" : "none" }}
    >
      <div className="container">
        <div className="my-video">
          {stream && (
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "250px" }}
            />
          )}
        </div>
        <div className="caller-video flex">
          {callAccepted && !callEnded ? (
            <video playsInline ref={userVideo} autoPlay />
          ) : null}
        </div>

        <div className="call-button flex">
          {!receivingCall && !callEnded ? (
            <button onClick={leaveCall}>End Call</button>
          ) : null}
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller flex">
              <h1>{callerName} is calling...</h1>
              <div>
                <button onClick={answerCall}>Answer</button>
                <button onClick={rejectCall}>End Call</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default VideoConference;
