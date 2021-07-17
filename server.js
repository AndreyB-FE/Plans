const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  let rawdata = fs.readFileSync("./data/notifications.json");
  let sendData = JSON.parse(rawdata);
  console.log(sendData);
  res.send({ express: sendData });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));