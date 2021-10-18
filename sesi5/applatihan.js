const express = require("express");
const PORT = 3000;
const app = express();

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.listen(PORT, () => {
  console.log("Listening on PORT : " + PORT);
});