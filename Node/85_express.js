const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./85_index.html"));
  console.log(req.query);
  //   res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
