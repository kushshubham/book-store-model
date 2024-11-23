const Book = require("../model/book.model.js");


const getBooks = async (req, res) => {
    try {
        console.log("welcome to book");
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createBook = async (req, res) =>{
    console.log('req', req)
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getBooks,
    createBook
}