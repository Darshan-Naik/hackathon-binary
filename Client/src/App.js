import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Router from "./Route/Router";
import { io } from "socket.io-client";
function App() {
   const { isAuth, user } = useSelector((state) => state.auth);
   const [io, setIo] = React.useState(null);

  React.useEffect(() => {
    if (isAuth) {
      const socket = io("http://localhost:8000");
      setIo(socket);
      socket.on("connect", (id) => {
        socket.emit("join", user._id);
      });
    }
  }, [isAuth]);

  return (
    <div className="App">
      <Router socket ={io}/>
    </div>
  );
}

export default App;
