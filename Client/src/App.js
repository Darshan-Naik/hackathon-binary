import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import "./App.css";
import Router from "./Route/Router";
import { url } from './Utils/serverUrl';

function App() {
  const { isAuth, user } = useSelector((state) => state.auth);
  const [client, setClient] = React.useState(null);

  React.useEffect(() => {
    if (isAuth) {
      const socket = io.connect(url);


      socket.on("connect", (id) => {
        setClient(socket);
      });
      socket.on("me", (id) => {
        axios.patch(url + "/mentors/" + user._id, { connect: id });
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
