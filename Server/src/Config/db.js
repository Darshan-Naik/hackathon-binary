const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://darshan:darshan@cluster0.hv4pz.mongodb.net/binary?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect;