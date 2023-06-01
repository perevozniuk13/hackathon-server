const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const movies = require("../data/movies-library.json");


router.get("/", (req, res) => {
    res.json(movies);
    console.log(movies);
})

// delete movie by id
router.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    movies =  movies.filter((movie) => movie.id !== movieId);
    res.json(movies);
})

// post new movie to library
router.post("/", (req, res) => {
    movies.push({
        id: uuidv4(), 
        title: req.body.title,
        poster: req.body.poster,
        status: req.body.status
    });
    res.json(movies);

})



module.exports = router;