import React from 'react'

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
}) {
  React.useEffect(() => {
    setLoadState(true)
  },[])
  return (
    <section className="call-model">
      <>
        <div className="container">
          <div className="video-container">
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              )}
            </div>
            <div className="video">
              {callAccepted && !callEnded ? (
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              ) : null}
            </div>
          </div>
          <div className="myId">
            <div className="call-button">
              {callAccepted && !callEnded ? (
                <button onClick={leaveCall}>End Call</button>
              ) : null}
            </div>
          </div>
          <div>
            {receivingCall && !callAccepted ? (
              <div className="caller">
                <h1>{callerName} is calling...</h1>
                <button onClick={answerCall}>Answer</button>
              </div>
            ) : null}
          </div>
        </div>
      </>
    </section>
  );
}

export default VideoConference;
