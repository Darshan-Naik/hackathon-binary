const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`${process.env.SECRET_URL}`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect;