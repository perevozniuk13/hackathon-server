const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());


const moviesRoutes = require("./routes/movies");
app.use("/movies", moviesRoutes);


const booksRoutes = require("./routes/books");
app.use("/books", booksRoutes);

app.listen(8099, () => {
    console.log('Listening...');
})
