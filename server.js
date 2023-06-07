const express = require("express");
const app = express();

app.use(express.static(__dirname + "/style"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
