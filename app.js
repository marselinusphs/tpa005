const express = require("express");
const app = express();
const allRoutes = require("./routes");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const PORT = 3500;

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
