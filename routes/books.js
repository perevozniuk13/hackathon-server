const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const books = require("../data/books-library.json");


router.get("/", (req, res) => {
    res.json(books);
    console.log(books);
})




module.exports = router;