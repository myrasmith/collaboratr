const express = require("express");
const { getArtists } = require("../queries/artists");
const artistsController = express.Router();

// INDEX ROUTE
artistsController.route("/").get(async (req, res) => {
  res.json(await getArtists());
});

module.exports = artistsController;
