/* const app = require("express") (); */
//same in 1 line
const birds = [
    {
        "id": 1,
        "name": "raven"
    },
    {
        "id": 2,
        "name": "seagull"
    },
    {
        "id": 3,
        "name": "pigeon"
    },
    {
        "id": 4,
        "name": "duck"
    }
]
const express = require("express");
const app = express();
app.use(express.json())

app.get("/birds", (req, res) => {
    res.send(birds)
})

// 

app.get("/birds/:id", (req, res) => {

    console.log(req.params);
        birds.forEach(bird => {
            if(bird.id == req.params.id) {
                console.log(bird)
                res.send(bird)
            }
        })
});

app.listen(8080);

