const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/codebridge-test-task"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/codebridge-test-task/index.html"));
});

app.listen(process.env.PORT || 8080);