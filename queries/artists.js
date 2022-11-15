const db = require("../db/dbConfig");

const getArtists = async () => {
  return await db.any("SELECT * FROM artists;");
};

module.exports = {
  getArtists,
};
