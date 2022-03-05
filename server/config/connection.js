const dotenv = require("dotenv").config();
const { connect, connection } = require("mongoose");

connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTypology: true,
    },
    () => {
        console.log("Connected to MongoDB".cyan.underline);
    }
);

module.exports = connection;
