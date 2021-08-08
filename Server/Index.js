const app = require("./src/server.js");

const express = require("express")
const http = require("http")

const connect = require("./src/Config/db");

const server = http.createServer(app)
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

const socket = require("socket.io-client")("http://localhost:8000");

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});


io.on("connection", (socket) => {
	socket.emit("me", socket.id)

  
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})
const PORT = process.env.PORT || "8000";

const start = async () => {
    await connect();
    server.listen(PORT, () => {
      console.log(`Listening to port 8000`);
    });
    //server.listen(8001, () => console.log("server is running on port 5000"))
}

start();