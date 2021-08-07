import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Router from "./Route/Router";
import { io } from "socket.io-client";
import axios from "axios";
function App() {
   const { isAuth, user } = useSelector((state) => state.auth);
   const [client, setClient] = React.useState(null);

  React.useEffect(() => {
    if (isAuth) {
      const socket = io.connect("http://localhost:8000");
      

      socket.on("connect", (id) => {
         setClient(socket);
      });
      socket.on("me", (id) => {
          axios.patch("http://localhost:8000/mentors/"+user._id, {connect: id});
      });
    }
  }, [isAuth]);

  return (
    <div className="App">
      <Router socket={client} />
    </div>
  );
}

export default App;
