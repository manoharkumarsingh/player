const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");
app.use(cors());
app.use(morgan());
app.use("/media", require("./routes/media"));
const port = process.env.PORT || 4600;
app.listen(port, (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
