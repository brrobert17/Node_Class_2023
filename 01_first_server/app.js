const app = require("express") ();
//same in 1 line
/* const express = require("express");
const app = express(); */


// route (entire thing)
// HTTP method
// | endpoint  callback function
app.get("/", (req, res) => {
    res.send({ message: "Our first route"})
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({message: `people have spun ${bicycleSpins} times` })
});

let isKicked = false;
app.get("/kickthedinosaur", (req, res) => {
    isKicked = true;
    if (isKicked) {
        res.send({message: "ow ow ow"})
    }
    else {
        res.send({message: "ha ha ha"})
    }
    isKicked = false;
})

app.get("/about", (req, res) => {
    res.send(`
    <h1 style="color: blue;">hello world</h1>
    `)
})

app.listen(8080);

