const express = require("express");
const cors = require("cors");
const artistsController = require("./controllers/artists");
const app = express();

app.use(cors());
app.use("/artists", artistsController);

module.exports = app;
