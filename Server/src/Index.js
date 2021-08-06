const app = require("./server.js");
const connect = require("./Config/db")

const start = async () => {
    await connect();
    app.listen(8000, () => {
        console.log(`Listening to port 8000`);
    })
}

start();