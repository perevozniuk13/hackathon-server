const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const moviesRoutes = require("./routes/movies");
app.use("/movies", moviesRoutes);

app.listen(8099, () => {
    console.log('Listening...');
})
