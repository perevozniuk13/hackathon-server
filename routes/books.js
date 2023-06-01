const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const books = require("../data/books-library.json");


router.get("/", (req, res) => {
    res.json(books);
    console.log(books);
})


// delete book by id
router.delete("/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    books =  books.filter((book) => book.id !== bookId);
    res.json(books);
})

// post new book to library
router.post("/", (req, res) => {
    books.push({
        id: uuidv4(), 
        title: req.body.title,
        poster: req.body.poster,
        status: req.body.status
    });
    res.json(books);

})



module.exports = router;