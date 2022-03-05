const dotenv = require("dotenv").config({ path: "../.env" });
const colors = require("colors");
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`.yellow);
    });
});
