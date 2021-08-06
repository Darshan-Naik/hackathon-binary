const app = require(".");
const connect = require("./Config/db")

const {signUp, logIn} = require('./Controller/mentorAuth.conroller');

app.use("/mentor/signup", signUp);
app.use("/mentor/login", logIn);

const start = async () => {
    await connect();
    app.listen(8000, () => {
        console.log(`Listening to port 8000`);
    })
}

start();