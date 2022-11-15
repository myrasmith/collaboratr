require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
