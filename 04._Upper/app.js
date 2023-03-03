import express from "express";
import jokes from "./util/jokes.js"

const app = express();
const PORT = 8080;

//const jokes = require("./util/jokes");




app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("server running on port: " + PORT);
});