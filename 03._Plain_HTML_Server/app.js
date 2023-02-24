const express = require("express");
const app = express();

app.use(express.static("public"));

let visitorCount = 0;
const tanks = [
  { name: "Leopard", nationality: "German" },
  { name: "Tiger", nationality: "German", year: 1943 },
  { name: "M1 Abrams", version: "M1" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/api/tanks", (req, res) => {
  res.send({ data: tanks });
});

app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorCount });
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port", PORT);
});
