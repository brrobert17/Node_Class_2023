/* const app = require("express") (); */
//same in 1 line
const express = require("express");
const app = express();
app.use(express.json())


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

app.get("/bat", (req, res) => {

    console.log(req.query);
    res.send({
        message: `The bat is ${req.query.adjective}`
    });
});

app.get("/bottle/:bottleSize", (req, res) => {

    console.log(req.params);
    res.send({
        message: `The bottle is ${req.params.bottleSize}`
    });
});

app.post("/package", (req, res) => {

    console.log(req.body);
    res.send(
       req.body
    );
});

app.listen(8080);

