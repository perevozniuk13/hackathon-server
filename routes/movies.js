const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const movies = require("../data/movies-library.json");


router.get("/", (req, res) => {
    res.json(movies);
    console.log(movies);
})




module.exports = router;