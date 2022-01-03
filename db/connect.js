const mongoose = require('mongoose');

const connectDB = async (url) => {
    return mongoose.connect(url)
    .then(() => {
    console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });
}

module.exports = connectDB;

