const express = require("express");
const app = express();
const allRoutes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();
process.env.TOKEN_SECRET;

const PORT = 3200;

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
