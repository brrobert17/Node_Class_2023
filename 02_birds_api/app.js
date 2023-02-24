/* const app = require("express") (); */
//same in 1 line
const birds = [
  {
    id: 1,
    name: "raven",
  },
  {
    id: 2,
    name: "seagull",
  },
  {
    id: 3,
    name: "pigeon",
  },
  {
    id: 4,
    name: "duck",
  },
];

//id emulator
const ids = [1, 2, 3, 4];

const handleNewId = () => {
  const newId = ids.length + 1;
  ids.push(newId);
  console.log(newId);
  return newId;
};

const getIndex = (i) => birds.findIndex((bird) => bird.id === +i);

const express = require("express");
const app = express();
app.use(express.json());

app.get("/birds", (req, res) => {
  res.send(birds);
});

app.get("/birds/:id", (req, res) => {
  const birdById = birds.filter((bird) => bird.id === +req.params.id);
  res.send(birdById);
});

app.post("/birds", (req, res) => {
  const newBird = { id: handleNewId(), name: req.body.name };
  birds.push(newBird);
  res.send(newBird);
});

app.delete("/birds/:id", (req, res) => {
  const id = +req.params.id;
  if (getIndex(id) === -1) {
    res
      .status(404)
      .send({ data: getIndex(id), message: `bird ${id} not found` });
  } else {
    const deletedBird = birds.splice(getIndex(id), 1)[0];
    res.send({ data: deletedBird });
  }
});

// currentId++ postfix
// ++currentId prefix

app.patch("/birds/:id", (req, res) => {
  const id = +req.params.id;
  const foundIndex = getIndex(id);
  if (foundIndex === -1) {
    res.status(404).send({ data: foundIndex, message: `bird ${id} not found` });
  } else {
    const foundBird = birds[foundIndex];
    const updatedBird = { ...foundIndex, ...req.body, id: foundBird.id };
    birds[foundIndex] = updatedBird;
    res.send({ data: updatedBird });
  }
});

app.listen(8080);
